import React, { useState, useEffect } from "react";
import { Button } from "antd";
import style from "@/styles/home/ImageRecognition.module.css";

const ML_ENDPOINT =
  "https://ijtiasa89d.execute-api.eu-west-2.amazonaws.com/default/ML_model";

type ImageRecognitionProps = {
  showFlatVersion: boolean;
  openAccordion(id: string): void;
};

export default function ImageRecognition(props: ImageRecognitionProps) {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [category, setCategory] = useState<string>("");

  let labelsToServices: Map<string, string>;
  if (props.showFlatVersion) {
    labelsToServices = new Map<string, string>([
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
      ["garden wast", "General Waste Collection Service"],
    ]);
  } else {
    labelsToServices = new Map<string, string>([
      ["plastic", "Plastic and Metal Recycling Service"],
      ["metal", "Plastic and Metal Recycling Service"],
      ["cardboard", "Paper and Card Recycling Service"],
      ["paper", "Paper and Card Recycling Service"],
      ["glass", "Glass Recycling Service"],
      ["food", "Food Waste Recycling Service"],
      ["rubbish", "General Waste Collection Service"],
      ["textile", "Textiles Recycling Service"],
      ["small electrical", "Small Electrical Items Recycling Service"],
      ["bulky waste", "Bulky Waste Collection Service"],
      ["clinical waste", "Clinical Waste Collection Service"],
      ["garden wast", "Garden Waste Recycling Service"],
    ]);
  }

  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImage(file);
    setCategory("");
  };

  const uploadImage = () => {
    if (!image) {
      setImage(undefined);
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(image!);
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
            setCategory("rubbish");
          } else setCategory(data[0]["Name"]);
        })
        .catch((error) => {
          console.error(error);
          setCategory("rubbish");
        });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
    console.log(category);
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
      <div>
        <h2>Upload an image here:</h2>
      </div>
      <div>
        {image && (
          <img
            className={style["image-recognition-image-preview"]}
            src={preview}
          />
        )}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <Button onClick={uploadImage}>Submit</Button>
        {category && (
          <div>
            <h4> This item was categorized as {category}. </h4>
            <h4> You can use the {labelsToServices.get(category)}. </h4>
            <button
              className={style["image-recognition-button"]}
              type="button"
              onClick={(event) =>
                jumpToAccordion(event, labelsToServices.get(category)!)
              }
            >
              Click here for more info about it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
