import { useState, ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { RecyclingService } from "@/data/RecyclingServices";
import style from "@/styles/cms/RecyclingServiceCMS.module.css";

import postImage from "@/src/postImage";

type RecyclingServiceCMSProps = {
  recyclingServices: RecyclingService[];
  setRecyclingServices(recyclingServices: RecyclingService[]): void;
  authToken: string;
};

export default function RecyclingServiceCMS(props: RecyclingServiceCMSProps) {
  const [recyclingService, setRecyclingService] = useState(
    props.recyclingServices[0]
  );

  const [itemImageFile, setItemImageFile] = useState<File>();
  const [binImageFile, setBinImageFile] = useState<File>();
  const [infographicImageFile, setInfographicImageFile] = useState<File>();

  const itemImageUploadRef = useRef<HTMLInputElement>(null);
  const binImageUploadRef = useRef<HTMLInputElement>(null);
  const infographicImageUploadRef = useRef<HTMLInputElement>(null);

  // This hook is called whenever the item image file changes. It creates the
  // URL for the image.
  useEffect(() => {
    if (itemImageFile) {
      const objectUrl = URL.createObjectURL(itemImageFile);
      setRecyclingService({ ...recyclingService, itemImage: objectUrl });
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setRecyclingService({ ...recyclingService, itemImage: "" });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemImageFile]);

  // This hook is called whenever the bin image file changes. It creates the
  // URL for the image.
  useEffect(() => {
    if (binImageFile) {
      const objectUrl = URL.createObjectURL(binImageFile);
      setRecyclingService({ ...recyclingService, binImage: objectUrl });
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setRecyclingService({ ...recyclingService, binImage: "" });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [binImageFile]);

  // This hook is called whenever the infographic image file changes. It creates the
  // URL for the image.
  useEffect(() => {
    if (infographicImageFile) {
      const objectUrl = URL.createObjectURL(infographicImageFile);
      setRecyclingService({ ...recyclingService, infographicImage: objectUrl });
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setRecyclingService({ ...recyclingService, infographicImage: "" });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infographicImageFile]);

  // This function is called when the user selects a file to upload.
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (event.target.name == "item") {
      if (file) {
        setItemImageFile(file);
      } else {
        event.target.value = "";
        setItemImageFile(undefined);
      }
    } else if (event.target.name == "bin") {
      if (file) {
        setBinImageFile(file);
      } else {
        event.target.value = "";
        setBinImageFile(undefined);
      }
    } else if (event.target.name == "infographic") {
      if (file) {
        setInfographicImageFile(file);
      } else {
        event.target.value = "";
        setInfographicImageFile(undefined);
      }
    }
  };

  function handleRemoveImage(event: MouseEvent<HTMLButtonElement>) {
    setRecyclingService({
      ...recyclingService,
      [(event.target as HTMLButtonElement).name]: "",
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setRecyclingService({
      ...recyclingService,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelectOnChange(event: SelectChangeEvent<string>) {
    itemImageUploadRef.current!.value = "";
    binImageUploadRef.current!.value = "";
    infographicImageUploadRef.current!.value = "";
    setRecyclingService(
      props.recyclingServices.find(
        (service) => service.id == event.target.value
      )!
    );
  }

  async function submitService() {
    const itemimagelink = await postImage(itemImageFile, props.authToken);
    const binimagelink = await postImage(binImageFile, props.authToken);
    const infoimagelink = await postImage(
      infographicImageFile,
      props.authToken
    );
    setRecyclingService({
      ...recyclingService,
      itemImage: itemimagelink,
    });
    setRecyclingService({
      ...recyclingService,
      binImage: binimagelink,
    });
    setRecyclingService({
      ...recyclingService,
      infographicImage: infoimagelink,
    });
    if (
      recyclingService.id != "" &&
      recyclingService.title != "" &&
      recyclingService.description != "" &&
      recyclingService.content != ""
    ) {
      const res = await fetch(`/api/recyclingServices/${recyclingService.id}`, {
        method: "POST",
        body: JSON.stringify(recyclingService),
        headers: {
          "content-type": "application/json",
          Authorization: props.authToken,
        },
      });
      const status = await res.status;
      if (status >= 200 && status < 300) {
        window.location.reload();
      } else {
        console.log("Request failed with status code: " + status);
      }
    }
  }

  return (
    <div>
      <form>
        <div className={style["subheading"]}>
          <h1>Edit Recycling Services</h1>
        </div>

        <div className={style["markdown-guide"]}>
          <ReactMarkdown>
            You can use markdown to style your content. Please see
            [here](https://commonmark.org/help/) for a guide on markdown. To
            create an empty line, use *&amp;nbsp\;*.
          </ReactMarkdown>
        </div>

        <div className={style["subheading"]}>
          <h3>Preview</h3>
        </div>

        <div className={style["recycling-service-preview-wrapper"]}>
          <div className={style["recycling-service-preview"]}>
            <div>
              <img
                className={style["recycling-service-preview-item-image"]}
                src={recyclingService.itemImage}
                alt=""
              />
              <h2>{recyclingService.title}</h2>
            </div>
            <div>
              <ReactMarkdown>{recyclingService.description}</ReactMarkdown>
            </div>
            <div>
              {recyclingService.binImage != null ? (
                <img
                  className={style["recycling-service-preview-bin-image"]}
                  src={recyclingService.binImage}
                  alt=""
                />
              ) : (
                <br />
              )}
              <ReactMarkdown>{recyclingService.content}</ReactMarkdown>
              {recyclingService.infographicImage != null ? (
                <img
                  className={
                    style["recycling-service-preview-infographic-image"]
                  }
                  src={recyclingService.infographicImage}
                  alt=""
                />
              ) : (
                <br />
              )}
              {recyclingService.link != "" ? (
                <ReactMarkdown>
                  {`[Link for more details.](${recyclingService.link})`}
                </ReactMarkdown>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <FormControl fullWidth>
          <InputLabel>Recycling Service</InputLabel>
          <Select
            label="Recycling Service"
            name="recycling-service"
            value={recyclingService.id}
            onChange={(event, child) => handleSelectOnChange(event)}
          >
            {props.recyclingServices.map((service) => (
              <MenuItem key={service.id} value={service.id}>
                {service.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className={style["form-text-field"]}>
          <TextField
            required
            fullWidth
            label="Recycling Service Title"
            name="title"
            variant="outlined"
            value={recyclingService.title}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            required
            fullWidth
            label="Recycling Service Description"
            name="description"
            variant="outlined"
            value={recyclingService.description}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            required
            multiline
            fullWidth
            label="Recycling Service Content"
            name="content"
            variant="outlined"
            value={recyclingService.content}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            required
            fullWidth
            label="Recycling Service Link"
            name="link"
            variant="outlined"
            value={recyclingService.link}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-image-upload"]}>
          <span>Upload the item image for the service here:</span>
          <input
            ref={itemImageUploadRef}
            name="item"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Button
            name="itemImage"
            size="small"
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={handleRemoveImage}
          >
            Remove Image
          </Button>
        </div>

        <div className={style["form-image-upload"]}>
          <span>Upload the bin image for the service here:</span>
          <input
            ref={binImageUploadRef}
            name="bin"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Button
            name="binImage"
            size="small"
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={handleRemoveImage}
          >
            Remove Image
          </Button>
        </div>

        <div className={style["form-image-upload"]}>
          <span>Upload the infographic image for the service here:</span>
          <input
            ref={infographicImageUploadRef}
            name="infographic"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Button
            name="infographicImage"
            size="small"
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={handleRemoveImage}
          >
            Remove Image
          </Button>
        </div>

        <div className={style["form-submit-button"]}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={submitService}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
