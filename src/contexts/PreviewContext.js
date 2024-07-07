import { createContext, useContext, useEffect, useState } from "react";

const PreviewContext = createContext();

export const usePreview = () => {
  return useContext(PreviewContext);
};

export const PreviewProvider = ({ children }) => {
  const [isPreview, setIsPreview] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const preview = query.get('preview');
    setIsPreview(preview);
  }, []);

  return (
    <PreviewContext.Provider value={{ isPreview }}>
      {children}
    </PreviewContext.Provider>
  );
};