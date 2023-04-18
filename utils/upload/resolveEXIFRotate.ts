import loadImage from "blueimp-load-image";

const resolveEXIFRotate = (files: FileList | null) => {
  return new Promise<File>((resolve, reject) => {
    if (!files) {
      const error = new Error(`Files are null`);
      reject(error);
      return;
    }
    const file = files[0];

    loadImage(
      file,
      (img: any, data: loadImage.MetaData | undefined) => {
        const orientation = data?.exif?.get("Orientation");
        console.debug("origin Orinentation Data: ", orientation);

        if (!(data?.imageHead && data?.exif && orientation !== 1)) {
          console.debug("resolveEXIFRotate: 이미지를 회전하지 않아도 됨.");
          resolve(file);
          return;
        }

        (loadImage as any)?.writeExifData(
          data.imageHead,
          data,
          "Orientation",
          1
        );

        img?.toBlob(
          (blob: any) => {
            (loadImage as any)?.replaceHead(
              blob,
              data?.imageHead,
              (newBlob: any) => {
                newBlob.name = file.name;
                const newFile = new File([newBlob], "rotatedImg.jpg", {
                  type: "image/jpeg",
                });
                console.debug("new file: ", newFile);
                console.debug("origin file: ", file);

                // orientation 바뀜 확인용
                loadImage.parseMetaData(newFile, function (data) {
                  console.debug(
                    "New Orientation data: ",
                    data?.exif?.get("Orientation")
                  );
                });
                resolve(newFile);
                return;
              }
            );
          },
          "image/jpeg",
          "image/jpg"
        );
      },
      { meta: true, orientation: true, canvas: true }
    );
  });
};

export default resolveEXIFRotate;
