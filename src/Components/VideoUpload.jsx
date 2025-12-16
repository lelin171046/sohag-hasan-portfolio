import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../Hooks/Axios";


const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    videoLink: "",
    thumbnailLink: ""
  });

  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error
  } = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("/addVideo", data);
      return res.data;
    },
    onSuccess: () => {
      setFormData({
        title: "",
        videoLink: "",
        thumbnailLink: ""
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Video</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Video Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Video Link
          </label>
          <input
            type="url"
            name="videoLink"
            value={formData.videoLink}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Thumbnail Link
          </label>
          <input
            type="url"
            name="thumbnailLink"
            value={formData.thumbnailLink}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {isError && (
          <p className="text-sm text-red-600">
            {error?.response?.data?.message || "Upload failed"}
          </p>
        )}

        {isSuccess && (
          <p className="text-sm text-green-600">
            Video uploaded successfully
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-black text-white py-2 rounded disabled:opacity-60"
        >
          {isPending ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
