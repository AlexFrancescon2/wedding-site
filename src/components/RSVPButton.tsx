export const RSVPButton = () => {
  const handleClick = () => {
    const formSection = document.getElementById("rsvp-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        border border-white
        text-white
        bg-transparent
        px-6 py-3
        rounded-full
        font-semibold
        transition
        hover:bg-white/20
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-white
      "
    >
      RSVP
    </button>
  );
};
