import { useRef, useState, type FC } from "react";
import * as MaterialIcons from "react-icons/md";

const { MdUpload } = MaterialIcons;

interface UploadInputProps {
  value?: string;
  onChange: (url: string) => void;
}

export const UploadInput: FC<UploadInputProps> = ({ value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl);
      onChange(localUrl);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-100 h-150 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-xl cursor-pointer overflow-hidden hover:border-purple-500/60 transition-all duration-300"
    >
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="h-full object-cover opacity-80 hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <MdUpload size={36} className="text-purple-400" />
          <p className="text-gray-400 text-sm font-medium">Fazer upload</p>
        </div>
      )}
      <input
        ref={fileInputRef}
        onChange={handleChange}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};
