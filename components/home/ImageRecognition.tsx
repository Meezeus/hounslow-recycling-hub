import React, { useState, useEffect } from "react";
import style from "@/styles/home/ImageRecognition.module.css";
import buttonStyle from "@/styles/home/Button.module.css";

const ML_ENDPOINT =
  "https://ijtiasa89d.execute-api.eu-west-2.amazonaws.com/default/ML_model";

const ACCEPTABLE_IMAGE_TYPES = ["png", "jpg", "jpeg"];
const MAX_IMAGE_FILE_SIZE = 4000000;

type ImageRecognitionProps = {
  showFlatVersion: boolean;
  openAccordion(id: string): void;
};

export default function ImageRecognition(props: ImageRecognitionProps) {
  const [imageFile, setImageFile] = useState<File>();
  const [imageURL, setImageURL] = useState("");
  const [imageCategory, setImageCategory] = useState("");

  const labelsToServices = props.showFlatVersion
    ? new Map<string, string>([
        ["plastic", "Plastic Recycling Service"],
        ["metal", "Metal Recycling Service"],
        ["cardboard", "Card Recycling Service"],
        ["paper", "Paper Recycling Service"],
        ["glass", "Glass Recycling Service"],
        ["food", "Food Waste Recycling Service"],
        ["rubbish", "General Waste Collection Service"],
        ["textile", "Textiles Recycling"],
        ["small electrical", "Small Electrical Items Recycling"],
        ["bulky waste", "Bulky Waste Collection Service"],
        ["clinical waste", "Clinical Waste Collection Service"],
      ])
    : new Map<string, string>([
        ["plastic", "Plastic and Metal Recycling Service"],
        ["metal", "Plastic and Metal Recycling Service"],
        ["cardboard", "Paper and Card Recycling Service"],
        ["paper", "Paper and Card Recycling Service"],
        ["glass", "Glass Recycling Service"],
        ["food", "Food Waste Recycling Service"],
        ["rubbish", "General Waste Collection Service"],
        ["textile", "Textile Recycling Service"],
        ["small electrical", "Small Electrical Items Recycling Service"],
        ["bulky waste", "Bulky Waste Collection Service"],
        ["clinical waste", "Clinical Waste Collection Service"],
        ["garden waste", "Garden Waste Recycling Service"],
      ]);

  // This hook is called whenever the image file changes. It creates the preview
  // for the image.
  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile);
      setImageURL(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageURL("");
      return;
    }
  }, [imageFile]);

  // This function is called when the user selects a file to upload.
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Reset the category.
    setImageCategory("");
    // Get and check the file.
    const file = event.target.files![0];
    if (
      file &&
      ACCEPTABLE_IMAGE_TYPES.includes(file.name.split(".").pop()!) &&
      file.size < MAX_IMAGE_FILE_SIZE
    ) {
      setImageFile(file);
    } else {
      event.target.value = "";
      setImageFile(undefined);
    }
  };

  // This function classifies the image file using AWS Rekognition.
  const classifyImage = () => {
    if (!imageFile) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(imageFile!);

    reader.onload = function () {
      const encodedResult = reader.result;
      const encodedImage = new String(encodedResult).split(",", 2)[1];

      fetch(ML_ENDPOINT, {
        method: "POST",
        body: encodedImage,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length == 0) {
            // No category exceeded the minimum confidence.
            setImageCategory("rubbish");
          } else if (data.length > 0 && "Name" in data[0]) {
            // Image classified successfully.
            setImageCategory(data[0]["Name"]);
          } else {
            // Error with AWS Rekognition
            console.error("Error while reading response data: ", data);
          }
        });
    };

    reader.onerror = function (error) {
      console.error("Error while reading file: ", error);
    };
  };

  async function jumpToAccordion(
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    event.stopPropagation();
    props.openAccordion(id);
    await new Promise((r) => setTimeout(r, 200));
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <div className={style["image-recognition-wrapper"]}>
      <h2>Upload an image here:</h2>
      <p>
        {`Image must be less than 4 MB, smaller than 4096x4096, 
        and one of the following types: ${ACCEPTABLE_IMAGE_TYPES.join(", ")}.`}
      </p>
      {imageFile && (
        <div>
          <img
            className={style["image-recognition-preview"]}
            src={imageURL}
            alt=""
          />
        </div>
      )}
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <div>
        <button className={buttonStyle["button"]} onClick={classifyImage}>
          Submit
        </button>
      </div>
      {imageCategory && (
        <div>
          <h4> This item was categorized as {imageCategory}. </h4>
          {labelsToServices.get(imageCategory) ? (
            <>
              <h4> You can use the {labelsToServices.get(imageCategory)}. </h4>
              <button
                className={buttonStyle["button"]}
                type="button"
                onClick={(event) =>
                  jumpToAccordion(event, labelsToServices.get(imageCategory)!)
                }
              >
                Click here for more info!
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
