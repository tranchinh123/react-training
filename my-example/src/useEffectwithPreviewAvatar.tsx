import { useState, useEffect } from "react";

interface FilewithPreview extends File {
  preview?: string;
}

function PreviewAvatar() {
  const [avatar, setAvatar] = useState<FilewithPreview | undefined>(undefined);

  useEffect(() => {
    // cleanup function
    return () => {
      if (avatar && avatar.preview) {
        URL.revokeObjectURL(avatar.preview);
      }
    };
  });

  const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as FilewithPreview;
    if (file) {
      const objectURL = URL.createObjectURL(file);
      file.preview = objectURL;
      setAvatar(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}
export default PreviewAvatar;
