interface playButtonAboutUsProps {
  className: string;
}

export default function PlayButtonAboutUs({ className = "" }: playButtonAboutUsProps) {
  return (
    <button className="play-button">
      <svg
        className="play-button2"
        width="49"
        height="50"
        viewBox="0 0 49 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
        <path
          d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
          fill="white"
        />
      </svg>

      <div className="watch-video">Watch Video </div>
    </button>
  );
}