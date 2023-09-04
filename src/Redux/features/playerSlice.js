import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  Artist: {
    id: "Playlist1",
    title: "Nguyễn Tấn Lực",
    description:
      "Bắt kịp xu hướng cùng các ca khúc được yêu thích khắp mạng xã hội.",
    image: "https://i.scdn.co/image/ab67616d00001e025b447e0566aadb805ebc5721",
    music: [],
  },
  ListPlaylist: [
    {
      id: "Playlist1",
      title: "PlayList Vietnamese",
      description:
        "Bắt kịp xu hướng cùng các ca khúc được yêu thích khắp mạng xã hội.",
      image: "https://i.scdn.co/image/ab67616d00001e025b447e0566aadb805ebc5721",
      music: [
        {
          chartEntryData: {
            currentRank: 1,
            previousRank: 1,
            peakRank: 1,
            peakDate: "2023-07-14",
            appearancesOnChart: 33,
            consecutiveAppearancesOnChart: 33,
            rankingMetric: {
              value: "675951",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 1,
            entryDate: "2023-07-14",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Seven (feat. Latto) (Explicit Ver.)",
            trackUri: "spotify:track:7x9aauaA9cu6tyfpHnqDLo",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02bf5cce5a0e1ed03a626bdd74",
            artists: [
              {
                name: "Jung Kook",
                spotifyUri: "spotify:artist:6HaGTQPmzraVmaVxvz6EUc",
                externalUrl: "",
              },
              {
                name: "Latto",
                spotifyUri: "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-07-14",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/f/8f/5McUFZz2s-w.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=-FSZCFkUkU6_xOP_o1dGnA&s=1693762532&n=Seven%20%28feat.%20Latto%29%20-%20Explicit%20Ver.",
        },
        {
          chartEntryData: {
            currentRank: 2,
            previousRank: 2,
            peakRank: 2,
            peakDate: "2023-08-12",
            appearancesOnChart: 5,
            consecutiveAppearancesOnChart: 5,
            rankingMetric: {
              value: "263027",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 3,
            entryDate: "2023-08-11",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Love Me Again",
            trackUri: "spotify:track:2N0SPREDYqILVEFSsWF5N5",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e022f1a5b69c2bd76474bca8035",
            artists: [
              {
                name: "V",
                spotifyUri: "spotify:artist:3JsHnjpbhX4SnySpvpa9DK",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-08-11",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/5/5d/CF8RUJnljzg.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=gGdPZWACy0a_HxkVoSQdBQ&s=1693762533&n=Love%20Me%20Again",
        },
        {
          chartEntryData: {
            currentRank: 3,
            previousRank: 3,
            peakRank: 2,
            peakDate: "2023-08-11",
            appearancesOnChart: 5,
            consecutiveAppearancesOnChart: 5,
            rankingMetric: {
              value: "245144",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 2,
            entryDate: "2023-08-11",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Rainy Days",
            trackUri: "spotify:track:5ydjxBSUIDn26MFzU3asP4",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e022f1a5b69c2bd76474bca8035",
            artists: [
              {
                name: "V",
                spotifyUri: "spotify:artist:3JsHnjpbhX4SnySpvpa9DK",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-08-11",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/1/43/C8ZxZZZNXMo.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=ip5bCxXlbToJDUQjCBeSVw&s=1693762534&n=Rainy%20Days",
        },
        {
          chartEntryData: {
            currentRank: 4,
            previousRank: 4,
            peakRank: 1,
            peakDate: "2023-03-25",
            appearancesOnChart: 144,
            consecutiveAppearancesOnChart: 144,
            rankingMetric: {
              value: "235879",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 1,
            entryDate: "2023-03-25",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Like Crazy",
            trackUri: "spotify:track:3Ua0m0YmEjrMi9XErKcNiR",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e022b46078245d0120690eb560d",
            artists: [
              {
                name: "Jimin",
                spotifyUri: "spotify:artist:1oSPZhvZMIrWW5I41kPkkY",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-24",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/8/41/5lpppPsc2n4.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=f-gO3cXc5-zUdV0kcFLKKQ&s=1693762535&n=Like%20Crazy",
        },
        {
          chartEntryData: {
            currentRank: 5,
            previousRank: 5,
            peakRank: 3,
            peakDate: "2023-08-02",
            appearancesOnChart: 15,
            consecutiveAppearancesOnChart: 15,
            rankingMetric: {
              value: "95644",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 11,
            entryDate: "2023-08-01",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "id 072019",
            trackUri: "spotify:track:1o6cYDMHvKOfizi4d9Lqxr",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02dc031e2429585e32b4ccb69b",
            artists: [
              {
                name: "W/N",
                spotifyUri: "spotify:artist:6NF9Oa4ThQWCj6mogFSrVD",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-07-31",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/c/f5/GheFGLpNh44.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=1xu6-EktmowZ81OZvBR5QQ&s=1693762536&n=id%20072019",
        },
        {
          chartEntryData: {
            currentRank: 6,
            previousRank: 7,
            peakRank: 2,
            peakDate: "2022-08-09",
            appearancesOnChart: 377,
            consecutiveAppearancesOnChart: 377,
            rankingMetric: {
              value: "62804",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 58,
            entryDate: "2022-08-04",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Vì Anh Đâu Có Biết",
            trackUri: "spotify:track:6VXVYATpQXEIoZ97NnWCmn",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e022461003df8139247949c8a9d",
            artists: [
              {
                name: "Madihu",
                spotifyUri: "spotify:artist:1OIYKbmhG0RxPXvVPNj3NN",
                externalUrl: "",
              },
              {
                name: "Vũ.",
                spotifyUri: "spotify:artist:57g2v7gJZepcwsuwssIfZs",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "WM Vietnam",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-08-04",
          },
          audio:
            "https://mgamma.123tokyo.xyz/get.php/5/47/YWKjGyKZC0k.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=HhyNqnr-FbYjNd7zDZGglg&s=1693762537&n=V%C3%AC%20Anh%20%C4%90%C3%A2u%20C%C3%B3%20Bi%E1%BA%BFt",
        },
        {
          chartEntryData: {
            currentRank: 7,
            previousRank: 6,
            peakRank: 6,
            peakDate: "2023-08-14",
            appearancesOnChart: 4,
            consecutiveAppearancesOnChart: 4,
            rankingMetric: {
              value: "62023",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 12,
            entryDate: "2023-08-12",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "tình yêu có nghĩa là gì?",
            trackUri: "spotify:track:6Lzlbce8Eg1dPg91VSx6kk",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02628518a0e866180b5c17adc5",
            artists: [
              {
                name: "tlinh",
                spotifyUri: "spotify:artist:3diftVOq7aEIebXKkC34oR",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-08-11",
          },
          audio:
            "https://mgamma.123tokyo.xyz/get.php/c/09/Wmkf6SvJ9M4.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=ZU2s9xs6oupW93L9hNZhoA&s=1693762538&n=tlinh%20-%20t%C3%ACnh%20y%C3%AAu%20c%C3%B3%20ngh%C4%A9a%20l%C3%A0%20g%C3%AC_%20_%20OFFICIAL%20MUSIC%20VIDEO",
        },
        {
          chartEntryData: {
            currentRank: 8,
            previousRank: 9,
            peakRank: 3,
            peakDate: "2023-07-13",
            appearancesOnChart: 89,
            consecutiveAppearancesOnChart: 79,
            rankingMetric: {
              value: "60051",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 133,
            entryDate: "2022-12-30",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Chơi Như Tụi Mỹ",
            trackUri: "spotify:track:255vSRpVq5YYKBJiem1BVx",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02001da1cf1c6860392a1380af",
            artists: [
              {
                name: "Andree Right Hand",
                spotifyUri: "spotify:artist:4grjJqg7iwQ8RKHs8d9Snh",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "$maker Music",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-12-30",
          },
          audio:
            "https://mdelta.123tokyo.xyz/get.php/2/2d/umKLy_E5Dyk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=Lz6SyP0kxRgnI_O8eBO_Sg&s=1693762539&n=Ch%C6%A1i%20Nh%C6%B0%20T%E1%BB%A5i%20M%E1%BB%B9",
        },
        {
          chartEntryData: {
            currentRank: 9,
            previousRank: 12,
            peakRank: 1,
            peakDate: "2023-04-07",
            appearancesOnChart: 105,
            consecutiveAppearancesOnChart: 36,
            rankingMetric: {
              value: "59544",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 1,
            entryDate: "2023-04-07",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "People Pt.2 (feat. IU)",
            trackUri: "spotify:track:41JPN7pZMTp1sumBOHOzHd",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02fa9247b68471b82d2125651e",
            artists: [
              {
                name: "Agust D",
                spotifyUri: "spotify:artist:5RmQ8k4l3HZ8JoPb4mNsML",
                externalUrl: "",
              },
              {
                name: "IU",
                spotifyUri: "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-04-21",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/d/41/7GvTI65VHeo.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=dtzQAOhD6R79XN8HtVx_KA&s=1693762540&n=%EC%82%AC%EB%9E%8C%20Pt.2%20%28feat.%20%EC%95%84%EC%9D%B4%EC%9C%A0%29",
        },
        {
          chartEntryData: {
            currentRank: 10,
            previousRank: 8,
            peakRank: 1,
            peakDate: "2023-03-03",
            appearancesOnChart: 167,
            consecutiveAppearancesOnChart: 167,
            rankingMetric: {
              value: "58435",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 39,
            entryDate: "2023-03-02",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "nếu lúc đó",
            trackUri: "spotify:track:7wj9sGlHGTMQ28liyi48hz",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e025b447e0566aadb805ebc5721",
            artists: [
              {
                name: "tlinh",
                spotifyUri: "spotify:artist:3diftVOq7aEIebXKkC34oR",
                externalUrl: "",
              },
              {
                name: "2pillz",
                spotifyUri: "spotify:artist:0XtC2d9ZVigYA7iMy5YkW0",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-02",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/a/80/27Q74nknDyk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=k19ujSbU3U5Ce0dQWsr39w&s=1693762541&n=n%E1%BA%BFu%20l%C3%BAc%20%C4%91%C3%B3",
        },
        {
          chartEntryData: {
            currentRank: 11,
            previousRank: 11,
            peakRank: 11,
            peakDate: "2023-07-27",
            appearancesOnChart: 25,
            consecutiveAppearancesOnChart: 25,
            rankingMetric: {
              value: "54432",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 77,
            entryDate: "2023-07-22",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Nụ hôn Bisou",
            trackUri: "spotify:track:4TMdpMJNQdcawl8JjZEwLk",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02b63e81e1ef7f1d97b62abc30",
            artists: [
              {
                name: "Mikelodic",
                spotifyUri: "spotify:artist:39HlpQmjGAer2XWNh0Ro83",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "DAO Entertainment",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-10-28",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 12,
            previousRank: 10,
            peakRank: 3,
            peakDate: "2023-07-22",
            appearancesOnChart: 31,
            consecutiveAppearancesOnChart: 31,
            rankingMetric: {
              value: "54328",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 15,
            entryDate: "2023-07-16",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Anh Là Ai? (feat. Dick, DT & UMIE)",
            trackUri: "spotify:track:6HpkHTTwfVmSoopeloHqOp",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02e368556118fdcd985aa28019",
            artists: [
              {
                name: "RAP VIỆT",
                spotifyUri: "spotify:artist:1cPpd989kghzlZqfpP4KwL",
                externalUrl: "",
              },
              {
                name: "Dick",
                spotifyUri: "spotify:artist:1tikl40deDgJWS57GTKiVh",
                externalUrl: "",
              },
              {
                name: "DT",
                spotifyUri: "spotify:artist:56YvnYcOAPPIuSwoZ6uoBP",
                externalUrl: "",
              },
              {
                name: "UMIE",
                spotifyUri: "spotify:artist:6fIF1TzV4K21TUWPXoQDAj",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "DAT VIET VAC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-08-09",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/0/de/HSxKdfgf40U.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=B3dpSB0dymx3EfXoigoGEA&s=1693762544&n=C%C3%94NG%20HI%E1%BA%BEU%20%C3%A1p%20%C4%91%E1%BA%A3o%20DT%20T%E1%BA%ACP%20RAP%20full%20l%C6%B0%E1%BB%A3t%20ch%E1%BB%8Dn%20c%E1%BB%A7a%20BGK%20v%E1%BB%9Bi%20b%E1%BA%A3n%20rap%20Anh%20L%C3%A0%20Ai%20_%20RAP%20VI%E1%BB%86T%20M%C3%99A%203",
        },
        {
          chartEntryData: {
            currentRank: 13,
            previousRank: 15,
            peakRank: 1,
            peakDate: "2022-03-03",
            appearancesOnChart: 538,
            consecutiveAppearancesOnChart: 538,
            rankingMetric: {
              value: "53056",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 40,
            entryDate: "2022-02-24",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Chìm Sâu",
            trackUri: "spotify:track:7jLSThU5Kg1RWt19Leiaxm",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02b315e8bb7ef5e57e9a25bb0f",
            artists: [
              {
                name: "RPT MCK",
                spotifyUri: "spotify:artist:1zSv9qZANOWB4HRE8sxeTL",
                externalUrl: "",
              },
              {
                name: "Trung Trần",
                spotifyUri: "spotify:artist:2v14NO80QYditUms7sbEIZ",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "N0L4B3L",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-02",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/9/fc/hpNUnNyR_00.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=DP8hT224HkTqErRDIv5FdA&s=1693762545&n=Ch%C3%ACm%20S%C3%A2u",
        },
        {
          chartEntryData: {
            currentRank: 14,
            previousRank: 13,
            peakRank: 1,
            peakDate: "2021-10-24",
            appearancesOnChart: 449,
            consecutiveAppearancesOnChart: 79,
            rankingMetric: {
              value: "52021",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 2,
            entryDate: "2021-09-10",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "MONEY",
            trackUri: "spotify:track:7hU3IHwjX150XLoTVmjD0q",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02330f11fb125bb80b760f9e19",
            artists: [
              {
                name: "LISA",
                spotifyUri: "spotify:artist:5L1lO4eRHmJ7a0Q6csE5cT",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "YG Entertainment/Interscope Records",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2021-09-10",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/8/07/4YSHPGn9-LM.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=ZL0BfKCudJTtcPp7eYqoJg&s=1693762546&n=MONEY",
        },
        {
          chartEntryData: {
            currentRank: 15,
            previousRank: 14,
            peakRank: 2,
            peakDate: "2022-11-16",
            appearancesOnChart: 622,
            consecutiveAppearancesOnChart: 622,
            rankingMetric: {
              value: "51853",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 47,
            entryDate: "2021-12-02",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Chuyện Đôi Ta (feat. Muộii)",
            trackUri: "spotify:track:4CUvVaAYuXtvYURLFz7EIL",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02a400211178f6d590d875f2da",
            artists: [
              {
                name: "Emcee L (Da LAB)",
                spotifyUri: "spotify:artist:4bPYvyUn1mWwUwIW57oST2",
                externalUrl: "",
              },
              {
                name: "Muộii (Starry Night)",
                spotifyUri: "spotify:artist:1Tdy7LZnrufTyuEbgDi1D8",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Yin Yang Media",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2021-12-01",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/8/3d/4RzTAS6njw4.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=DbeKf-TPtRr0ulqqModyYQ&s=1693762547&n=Chuy%E1%BB%87n%20%C4%90%C3%B4i%20Ta%20%28feat.%20Mu%E1%BB%99ii%29",
        },
        {
          chartEntryData: {
            currentRank: 16,
            previousRank: 16,
            peakRank: 1,
            peakDate: "2022-06-21",
            appearancesOnChart: 422,
            consecutiveAppearancesOnChart: 422,
            rankingMetric: {
              value: "50609",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 12,
            entryDate: "2022-06-20",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "vaicaunoicokhiennguoithaydoi",
            trackUri: "spotify:track:25h0TqC9H3BcMA7KjK5nHK",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e021e239b69aacaf275c9106948",
            artists: [
              {
                name: "GREY D",
                spotifyUri: "spotify:artist:6d0dLenjy5CnR5ZMn2agiV",
                externalUrl: "",
              },
              {
                name: "tlinh",
                spotifyUri: "spotify:artist:3diftVOq7aEIebXKkC34oR",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-06-20",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/5/a1/2iidlwQ-NfU.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=AfC7PVyU0j7x69qHl6oW_Q&s=1693762547&n=GREY%20D%20x%20tlinh%20-%20vaicaunoicokhiennguoithaydoi%20_%20Official%20Music%20Video",
        },
        {
          chartEntryData: {
            currentRank: 17,
            previousRank: 17,
            peakRank: 3,
            peakDate: "2023-03-07",
            appearancesOnChart: 167,
            consecutiveAppearancesOnChart: 167,
            rankingMetric: {
              value: "48400",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 62,
            entryDate: "2023-03-02",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Anh Đã Ổn Hơn",
            trackUri: "spotify:track:3YctJXK6kznnWl68TnYobN",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02b315e8bb7ef5e57e9a25bb0f",
            artists: [
              {
                name: "RPT MCK",
                spotifyUri: "spotify:artist:1zSv9qZANOWB4HRE8sxeTL",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "N0L4B3L",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-02",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 18,
            previousRank: 18,
            peakRank: 3,
            peakDate: "2023-04-28",
            appearancesOnChart: 114,
            consecutiveAppearancesOnChart: 114,
            rankingMetric: {
              value: "44611",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 47,
            entryDate: "2023-04-24",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "đưa em về nhàa",
            trackUri: "spotify:track:08ULi904W2Po6pVj8nN7KC",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e023d42b556aafb47a135edecbc",
            artists: [
              {
                name: "GREY D",
                spotifyUri: "spotify:artist:6d0dLenjy5CnR5ZMn2agiV",
                externalUrl: "",
              },
              {
                name: "Chillies",
                spotifyUri: "spotify:artist:2xvW7dgL1640K8exTcRMS4",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-04-24",
          },
          audio:
            "https://mdelta.123tokyo.xyz/get.php/4/d0/YM5nx2s8cz0.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=rGcfgFX1RoFD0sxlgbAiiA&s=1693762551&n=%C4%91%C6%B0a%20em%20v%E1%BB%81%20nh%C3%A0a",
        },
        {
          chartEntryData: {
            currentRank: 19,
            previousRank: 19,
            peakRank: 1,
            peakDate: "2022-05-20",
            appearancesOnChart: 652,
            consecutiveAppearancesOnChart: 652,
            rankingMetric: {
              value: "43143",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 191,
            entryDate: "2021-11-02",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Ánh Sao Và Bầu Trời",
            trackUri: "spotify:track:5iZHnufFUgATzrpGgH1K0W",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02212f0300aefcb79b00d2a6cf",
            artists: [
              {
                name: "T.R.I",
                spotifyUri: "spotify:artist:2rVYwIYNEsMxtt8j5yemHb",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Yin Yang Media",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2021-09-10",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/2/58/JCvkEkR9ydI.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=qlCOHvqab4MkHp_ilJuVhw&s=1693762552&n=%C3%81nh%20Sao%20V%C3%A0%20B%E1%BA%A7u%20Tr%E1%BB%9Di",
        },
        {
          chartEntryData: {
            currentRank: 20,
            previousRank: 21,
            peakRank: 1,
            peakDate: "2023-04-21",
            appearancesOnChart: 117,
            consecutiveAppearancesOnChart: 117,
            rankingMetric: {
              value: "42637",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 1,
            entryDate: "2023-04-21",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Haegeum",
            trackUri: "spotify:track:4bjN59DRXFRxBE1g5ne6B1",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02fa9247b68471b82d2125651e",
            artists: [
              {
                name: "Agust D",
                spotifyUri: "spotify:artist:5RmQ8k4l3HZ8JoPb4mNsML",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-04-21",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/4/95/cgCse3S63qk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=VnF3qqXjMZmX4aaLw4D3Zg&s=1693762552&n=%ED%95%B4%EA%B8%88",
        },
        {
          chartEntryData: {
            currentRank: 21,
            previousRank: 20,
            peakRank: 2,
            peakDate: "2023-01-29",
            appearancesOnChart: 233,
            consecutiveAppearancesOnChart: 233,
            rankingMetric: {
              value: "42601",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 116,
            entryDate: "2022-12-26",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Don't Côi",
            trackUri: "spotify:track:3ukrFH17Zl6iEZ2QJ1Zwiy",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e0251dc7628d51aaad33ae0d039",
            artists: [
              {
                name: "RPT Orijinn",
                spotifyUri: "spotify:artist:25JRC8aMGIGBIJ5KiINv3l",
                externalUrl: "",
              },
              {
                name: "Ronboogz",
                spotifyUri: "spotify:artist:0dBcEvEklr1jx4uZuhFX5e",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Rapital",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-11-20",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 22,
            previousRank: 22,
            peakRank: 2,
            peakDate: "2022-05-28",
            appearancesOnChart: 479,
            consecutiveAppearancesOnChart: 479,
            rankingMetric: {
              value: "41242",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 62,
            entryDate: "2022-04-24",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Có Em",
            trackUri: "spotify:track:6Hs2xIgB8nzyGFDvVA8lFa",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02556e7b75fb148c696f99a709",
            artists: [
              {
                name: "Madihu",
                spotifyUri: "spotify:artist:1OIYKbmhG0RxPXvVPNj3NN",
                externalUrl: "",
              },
              {
                name: "Low G",
                spotifyUri: "spotify:artist:6TITnFVRcl0AcZ4syE7Toe",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "NGUYEN CHI PHONG",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-04-22",
          },
          audio: "",
        },
      ],
    },
    {
      id: "Playlist2",
      title: "PlayList Us Uk",
      description: "Nhạc Us Uk được yêu thích nhất.",
      image: "https://i.scdn.co/image/ab67616d00001e02b63e81e1ef7f1d97b62abc30",
      music: [
        {
          chartEntryData: {
            currentRank: 87,
            previousRank: 86,
            peakRank: 1,
            peakDate: "2021-06-28",
            appearancesOnChart: 788,
            consecutiveAppearancesOnChart: 788,
            rankingMetric: {
              value: "20290",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 81,
            entryDate: "2021-06-19",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Thích Em Hơi Nhiều",
            trackUri: "spotify:track:45Mswno1F7FoZkcmQkp7fi",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e0208c808810a37c9a04f88cca1",
            artists: [
              {
                name: "Wren Evans",
                spotifyUri: "spotify:artist:5M3ffmRiOX9Q8Y4jNeR5wu",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2021-06-18",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 88,
            previousRank: 88,
            peakRank: 5,
            peakDate: "2022-12-31",
            appearancesOnChart: 248,
            consecutiveAppearancesOnChart: 248,
            rankingMetric: {
              value: "20284",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 134,
            entryDate: "2022-12-11",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Kill Bill",
            trackUri: "spotify:track:1Qrg8KqiBpW07V7PNxwwwL",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e020c471c36970b9406233842a5",
            artists: [
              {
                name: "SZA",
                spotifyUri: "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Top Dawg Entertainment/RCA Records",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-12-08",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/f/19/jkhAeWwKKIk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=JZTgZ7XYOw741zD8nI2KQg&s=1693762653&n=Kill%20Bill",
        },
        {
          chartEntryData: {
            currentRank: 89,
            previousRank: 81,
            peakRank: 14,
            peakDate: "2022-06-03",
            appearancesOnChart: 1323,
            consecutiveAppearancesOnChart: 1243,
            rankingMetric: {
              value: "20232",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 197,
            entryDate: "2019-09-07",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Tình Đắng Như Ly Cà Phê",
            trackUri: "spotify:track:2WOpp4vm16unl0N3i3BNNv",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02e8dac23cef88f3ff801a083d",
            artists: [
              {
                name: "NÂN",
                spotifyUri: "spotify:artist:7mFCX07lzCFLpHm72R93oB",
                externalUrl: "",
              },
              {
                name: "Ngơ",
                spotifyUri: "spotify:artist:4RGBKkUyyvsim9vdBKCCkc",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "nân",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2018-04-01",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 90,
            previousRank: 91,
            peakRank: 61,
            peakDate: "2023-06-30",
            appearancesOnChart: 427,
            consecutiveAppearancesOnChart: 330,
            rankingMetric: {
              value: "20214",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 197,
            entryDate: "2022-04-23",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "10 Ngàn Năm",
            trackUri: "spotify:track:76KYaCx7UjHwlnrqzcovLZ",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e029e9673108d9c4c139f6c58f0",
            artists: [
              {
                name: "PC",
                spotifyUri: "spotify:artist:3HD3V1nGFPwepBO7064Ij0",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "PC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2019-12-21",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 91,
            previousRank: 94,
            peakRank: 5,
            peakDate: "2022-08-03",
            appearancesOnChart: 387,
            consecutiveAppearancesOnChart: 387,
            rankingMetric: {
              value: "20047",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 21,
            entryDate: "2022-07-25",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "ThichThich",
            trackUri: "spotify:track:3rx7g2qRxKscgtQUiKwQvN",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e023c8aa605b7e8fc125f303d36",
            artists: [
              {
                name: "Phương Ly",
                spotifyUri: "spotify:artist:5Kh0ta0UY4uJ4g2CIdq9V9",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "PHUONG LY",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-07-24",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 92,
            previousRank: 95,
            peakRank: 1,
            peakDate: "2023-03-17",
            appearancesOnChart: 145,
            consecutiveAppearancesOnChart: 54,
            rankingMetric: {
              value: "19901",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 1,
            entryDate: "2023-03-17",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Set Me Free Pt.2",
            trackUri: "spotify:track:59hBR0BCtJsfIbV9VzCVAp",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e024f4ec2c2a865569bd4a067a4",
            artists: [
              {
                name: "Jimin",
                spotifyUri: "spotify:artist:1oSPZhvZMIrWW5I41kPkkY",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "BIGHIT MUSIC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-17",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/5/a2/esRyKTb4v6A.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=lWrM3053nv-dExbumX91nQ&s=1693762661&n=Set%20Me%20Free%20Pt.2",
        },
        {
          chartEntryData: {
            currentRank: 93,
            previousRank: 98,
            peakRank: 7,
            peakDate: "2022-09-16",
            appearancesOnChart: 104,
            consecutiveAppearancesOnChart: 43,
            rankingMetric: {
              value: "19809",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 7,
            entryDate: "2022-09-16",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Tally",
            trackUri: "spotify:track:0bYVPJvXr8ACmw313cVvhB",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e024aeaaeeb0755f1d8a8b51738",
            artists: [
              {
                name: "BLACKPINK",
                spotifyUri: "spotify:artist:41MozSoPIsD1dJM0CLPjZF",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "YG Entertainment/Interscope Records",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-09-16",
          },
          audio:
            "https://mgamma.123tokyo.xyz/get.php/8/22/-ECIZOCFd7Y.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=3NNvnEw8oyqFdL_99FY85g&s=1693762661&n=Tally",
        },
        {
          chartEntryData: {
            currentRank: 94,
            previousRank: 105,
            peakRank: 94,
            peakDate: "2023-08-15",
            appearancesOnChart: 4,
            consecutiveAppearancesOnChart: 4,
            rankingMetric: {
              value: "19768",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 162,
            entryDate: "2023-08-12",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Ngày Mai Người Ta Lấy Chồng",
            trackUri: "spotify:track:60GKmFakXVwnmiUFN2X5Kn",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02a93cb14544b71edc60f05928",
            artists: [
              {
                name: "Thành Đạt",
                spotifyUri: "spotify:artist:2ipMqlG0XTQbUbu7W0FnBm",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "MIXUS",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-05-12",
          },
          audio:
            "https://mdelta.123tokyo.xyz/get.php/f/0d/WL11bwvAYWI.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=FGrUR9LkfsJfnrtPvcNAuQ&s=1693762662&n=NG%C3%80Y%20MAI%20NG%C6%AF%E1%BB%9CI%20TA%20L%E1%BA%A4Y%20CH%E1%BB%92NG%20-%20TH%C3%80NH%20%C4%90%E1%BA%A0T%20x%20%C4%90%C3%94NG%20THI%C3%8AN%20%C4%90%E1%BB%A8C%20_%20OFFICIAL%20MV%20_%20Ng%C3%A0y%20H%C3%B4m%20%E1%BA%A4y%20Em%20%C4%90i%20Trong%20M%C6%B0a",
        },
        {
          chartEntryData: {
            currentRank: 95,
            previousRank: 103,
            peakRank: 2,
            peakDate: "2023-03-10",
            appearancesOnChart: 163,
            consecutiveAppearancesOnChart: 163,
            rankingMetric: {
              value: "19592",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 107,
            entryDate: "2023-03-06",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "ưng quá chừng",
            trackUri: "spotify:track:2ZJTmYNOA8k21yUtLXJG57",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e026acef64c620d95ee0c666fce",
            artists: [
              {
                name: "AMEE",
                spotifyUri: "spotify:artist:2aQnC3DbZB9GbauvhAw7ve",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Yin Yang Media",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-03-05",
          },
          audio: "",
        },
        {
          chartEntryData: {
            currentRank: 96,
            previousRank: 102,
            peakRank: 4,
            peakDate: "2022-09-16",
            appearancesOnChart: 171,
            consecutiveAppearancesOnChart: 23,
            rankingMetric: {
              value: "19460",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 4,
            entryDate: "2022-09-16",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Hard to Love",
            trackUri: "spotify:track:3MJhPqL2IgGs7gHEB2M35q",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e024aeaaeeb0755f1d8a8b51738",
            artists: [
              {
                name: "BLACKPINK",
                spotifyUri: "spotify:artist:41MozSoPIsD1dJM0CLPjZF",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "YG Entertainment/Interscope Records",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-09-16",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/9/80/EZXFpnBCZbM.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=RSggWJZ_Zx29kDp6JCYRMQ&s=1693762666&n=Hard%20to%20Love",
        },
        {
          chartEntryData: {
            currentRank: 97,
            previousRank: 90,
            peakRank: 90,
            peakDate: "2023-08-14",
            appearancesOnChart: 3,
            consecutiveAppearancesOnChart: 3,
            rankingMetric: {
              value: "19247",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 134,
            entryDate: "2023-08-13",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Enjoy Cái Moment Này (feat. Tez, Anh Tú & Vũ Thảo My)",
            trackUri: "spotify:track:5qgyOHMJFZwJMQ2Vi7uzgV",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02fdc608082d0af8457c8eafbe",
            artists: [
              {
                name: "RAP VIỆT",
                spotifyUri: "spotify:artist:1cPpd989kghzlZqfpP4KwL",
                externalUrl: "",
              },
              {
                name: "Tez",
                spotifyUri: "spotify:artist:1yWLf9thhwjqScDt6Az4Z9",
                externalUrl: "",
              },
              {
                name: "Anh Tú",
                spotifyUri: "spotify:artist:7LLfmKhGZI11XO0dO4xDI7",
                externalUrl: "",
              },
              {
                name: "Vũ Thảo My",
                spotifyUri: "spotify:artist:42D8BHt57a1V8Mn47afQhj",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "DAT VIET VAC",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2023-08-13",
          },
          audio:
            "https://mgamma.123tokyo.xyz/get.php/f/26/MOt0s0t7LZc.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=hpTVOeq74Ifaq0Yn3hcTIA&s=1693762667&n=TEZ%20tung%20s%E1%BB%9F%20tr%C6%B0%E1%BB%9Dng%20fastflow%20Enjoy%20C%C3%A1i%20Moment%20N%C3%A0y%20g%C3%A2y%20b%C3%A3o%20ti%E1%BA%BFn%20th%E1%BA%B3ng%20chung%20k%E1%BA%BFt%20_%20Rap%20Vi%E1%BB%87t%20Live%20Stage",
        },
        {
          chartEntryData: {
            currentRank: 98,
            previousRank: 100,
            peakRank: 25,
            peakDate: "2021-07-18",
            appearancesOnChart: 778,
            consecutiveAppearancesOnChart: 778,
            rankingMetric: {
              value: "19149",
              type: "STREAMS",
            },
            entryStatus: "MOVED_UP",
            entryRank: 127,
            entryDate: "2021-06-29",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Em Không Hiểu",
            trackUri: "spotify:track:1izPmgSW7FV6XFdEOiTvOY",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e022882dbcd6195d4f0ef4b2cd4",
            artists: [
              {
                name: "Changg",
                spotifyUri: "spotify:artist:1nX1HVIUo1Zfs3e2v3lFb9",
                externalUrl: "",
              },
              {
                name: "Minh Huy",
                spotifyUri: "spotify:artist:5zT1Ku9mzzl6RW5y4z0hUK",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Universal Music Indochina Distributed Labels",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2021-06-28",
          },
          audio:
            "https://mgamma.123tokyo.xyz/get.php/6/5f/RaKifsK2cOc.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=-WG6zMKJMedRW8KVsnFhaQ&s=1693762667&n=Changg%20_%20Em%20Kh%C3%B4ng%20Hi%E1%BB%83u%20_%20Official%20Video%20%28ft%20Minh%20Huy%29",
        },
        {
          chartEntryData: {
            currentRank: 99,
            previousRank: 99,
            peakRank: 1,
            peakDate: "2022-09-16",
            appearancesOnChart: 334,
            consecutiveAppearancesOnChart: 334,
            rankingMetric: {
              value: "19145",
              type: "STREAMS",
            },
            entryStatus: "NO_CHANGE",
            entryRank: 1,
            entryDate: "2022-09-16",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "Shut Down",
            trackUri: "spotify:track:7gRFDGEzF9UkBV233yv2dc",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e02002ef53878df1b4e91c15406",
            artists: [
              {
                name: "BLACKPINK",
                spotifyUri: "spotify:artist:41MozSoPIsD1dJM0CLPjZF",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "YG Entertainment/Interscope Records",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2022-09-15",
          },
          audio:
            "https://malpha.123tokyo.xyz/get.php/9/d9/950BdJKBhGo.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=f0mb2pB-WeVRdZ0DoCYudw&s=1693762668&n=Shut%20Down",
        },
        {
          chartEntryData: {
            currentRank: 100,
            previousRank: 96,
            peakRank: 54,
            peakDate: "2018-05-11",
            appearancesOnChart: 1147,
            consecutiveAppearancesOnChart: 25,
            rankingMetric: {
              value: "19038",
              type: "STREAMS",
            },
            entryStatus: "MOVED_DOWN",
            entryRank: 109,
            entryDate: "2018-03-14",
          },
          missingRequiredFields: false,
          trackMetadata: {
            trackName: "We Don't Talk Anymore (feat. Selena Gomez)",
            trackUri: "spotify:track:68EMU2RD1ECNeOeJ5qAXCV",
            displayImageUri:
              "https://i.scdn.co/image/ab67616d00001e024fe297c018e495a97662e5ac",
            artists: [
              {
                name: "Charlie Puth",
                spotifyUri: "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7",
                externalUrl: "",
              },
              {
                name: "Selena Gomez",
                spotifyUri: "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx",
                externalUrl: "",
              },
            ],
            producers: [],
            labels: [
              {
                name: "Artist Partner",
                spotifyUri: "",
                externalUrl: "",
              },
            ],
            songWriters: [],
            releaseDate: "2016-01-29",
          },
          audio:
            "https://mbeta.123tokyo.xyz/get.php/7/47/ffqliB42Nh4.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=k9sz2ZPXaQ9Wc3SE9ztp2A&s=1693762669&n=We%20Don%27t%20Talk%20Anymore%20%28feat.%20Selena%20Gomez%29",
        },
      ],
    },
  ],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
    setListPlayList: (state, action) => {
      state.ListPlaylist = action.payload;
    },
    setArtist: (state, action) => {
      state.Artist = action.payload;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
  setListPlayList,
  setArtist,
} = playerSlice.actions;

export default playerSlice.reducer;
