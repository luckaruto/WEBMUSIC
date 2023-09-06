import { useEffect } from "react";

const data = {
  lines: [
    {
      time: 0,
      words: "I have this thing where I get older but just never wiser",
    },
    { time: 8000, words: "Midnights become my afternoons" },
    { time: 16000, words: "When my depression works the graveyard shift" },
    {
      time: 24000,
      words: "All of the people I've ghosted stand there in the room",
    },
    { time: 32000, words: "I should not be left to my own devices" },
    { time: 40000, words: "They come with prices and vices" },
    { time: 48000, words: "I end up in crisis (tale as old as time)" },
    { time: 56000, words: "I wake up screaming from dreaming" },
    { time: 64000, words: "One day I'll watch as you're leaving" },
    { time: 72000, words: "'Cause you got tired of my scheming" },
    { time: 80000, words: "(For the last time)" },
    { time: 88000, words: "It's me, hi, I'm the problem, it's me" },
    { time: 96000, words: "At tea time, everybody agrees" },
    {
      time: 104000,
      words: "I'll stare directly at the sun but never in the mirror",
    },
    {
      time: 112000,
      words: "It must be exhausting always rooting for the anti-hero",
    },
    { time: 120000, words: "Sometimes I feel like everybody is a sexy baby" },
    { time: 128000, words: "And I'm a monster on the hill" },
    {
      time: 136000,
      words: "Too big to hang out, slowly lurching toward your favorite city",
    },
    { time: 144000, words: "Pierced through the heart, but never killed" },
    {
      time: 152000,
      words: "Did you hear my covert narcissism I disguise as altruism",
    },
    {
      time: 160000,
      words: "Like some kind of congressman? (Tale as old as time)",
    },
    { time: 168000, words: "I wake up screaming from dreaming" },
    { time: 176000, words: "One day I'll watch as you're leaving" },
    { time: 184000, words: "And life will lose all its meaning" },
    { time: 192000, words: "(For the last time)" },
    {
      time: 200000,
      words: "It's me, hi, I'm the problem, it's me (I'm the problem, it's me)",
    },
    { time: 208000, words: "At tea time, everybody agrees" },
    {
      time: 216000,
      words: "I'll stare directly at the sun but never in the mirror",
    },
    {
      time: 224000,
      words: "It must be exhausting always rooting for the anti-hero",
    },
    {
      time: 232000,
      words: "I have this dream my daughter in-law kills me for the money",
    },
    { time: 240000, words: "She thinks I left them in the will" },
    {
      time: 248000,
      words:
        "The family gathers 'round and reads it and then someone screams out",
    },
    { time: 256000, words: '"She\'s laughing up at us from hell"' },
    { time: 264000, words: "It's me, hi, I'm the problem, it's me" },
    { time: 272000, words: "It's me, hi, I'm the problem, it's me" },
    { time: 280000, words: "It's me, hi, everybody agrees, everybody agrees" },
    {
      time: 288000,
      words:
        "It's me, hi (hi), I'm the problem, it's me (I'm the problem, it's me)",
    },
    {
      time: 296000,
      words: "At tea (tea) time (time), everybody agrees (everybody agrees)",
    },
    {
      time: 304000,
      words: "I'll stare directly at the sun but never in the mirror",
    },
    {
      time: 312000,
      words: "It must be exhausting always rooting for the anti-hero",
    },
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
