import { useEffect } from "react";

const data = {
  lines: [
    { time: 0, words: "I don't want to be your Monday" },
    { time: 15000, words: "Your Monday" },
    { time: 20000, words: "Or your Tuesday" },
    { time: 30000, words: "Your Tuesday" },
    { time: 35000, words: "Oh, oh, oh" },
    { time: 40000, words: "To never need to do the things" },
    { time: 50000, words: "You do" },
    { time: 55000, words: "To never need to do the things" },
    { time: 60000, words: "You do" },
    { time: 70000, words: "Oh, oh, oh" },
    { time: 75000, words: "But I want to be the" },
    { time: 80000, words: "Sunday" },
    { time: 85000, words: "Be the" },
    { time: 90000, words: "Road that you take when" },
    { time: 95000, words: "You're looking for freedom" },
    { time: 100000, words: "Be the" },
    { time: 105000, words: "Windows down" },
    { time: 110000, words: "Rolling in your car with me" },
    { time: 115000, words: "I wanna be the" },
    { time: 120000, words: "Sun that lights up your whole world" },
    // Continue with more lines
  ],
};

export default function Index({ currentDuration, setCurrentDuration, audio }) {
  useEffect(() => {
    const element = document.querySelector('[data-id="lyrics-container"]');

    if (element) {
      const child = document.querySelector(
        `[data-position="${findNearestSmallerNumber(
          currentDuration * 1000,
          data.lines.map((d) => Number(d.time)) ?? [0]
        )}"]`
      );

      if (child) {
        const containerHeight = element.clientHeight;
        const childTop = child.offsetTop;
        const childHeight = child.offsetHeight;

        const scrollTop = Math.max(
          0,
          childTop - (containerHeight - childHeight) / 2
        );

        element.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [data, currentDuration]);

  const findNearestSmallerNumber = (num, arr) => {
    let smallest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < num && arr[i] > smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  };

  return (
    <div className="duration-200 ease-linear relative h-full">
      <div
        className="text-2xl flex flex-col font-poppins font-bold tracking-wide gap-5 break-all overflow-y-scroll no-scrollbar h-full p-5 items-center"
        data-id="lyrics-container"
      >
        {data &&
          data.lines.map((data) => (
            <span
              onClick={() => {
                setCurrentDuration(Number(data.time) / 1000);
                audio.currentTime = Number(data.time) / 1000;
              }}
              className={`cursor-pointer`}
              data-position={data.time}
              style={{
                color: "white",
                opacity:
                  Number(data.time) < (currentDuration ?? 100) * 1000
                    ? "100%"
                    : "50%",
              }}
              onMouseEnter={(ev) => (ev.currentTarget.style.opacity = "100%")}
              onMouseLeave={(ev) =>
                (ev.currentTarget.style.opacity =
                  Number(data.time) < (currentDuration ?? 100) * 1000
                    ? "100%"
                    : "50%")
              }
            >
              {data.words}
            </span>
          ))}
      </div>
    </div>
  );
}
