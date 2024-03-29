// SearchModal.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchModal = ({ searchModal, setSearchModal }: { searchModal: boolean, setSearchModal: (value: boolean) => void }) => {
  const router = useRouter();
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === "Enter") {
        router.push({ pathname: "/search", query: { key: input } });
        setSearchModal(false);
      }
      if (e.key === "Escape") {
        setSearchModal(false);
      }
    };

    if (searchModal) {
      document.getElementById("searchModal")?.focus();
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchModal, input, router, setSearchModal]);

  return (
    <div className={`search-modal ${searchModal ? "open" : ""}`}>
      <button onClick={() => setSearchModal(false)} className="search-close">
        <IoCloseCircleOutline />
      </button>
      <input
        type="text"
        className="form-input"
        id="searchModal"
        placeholder="Type and hit enter..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export { SearchModal };
