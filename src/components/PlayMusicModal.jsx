import React from "react";
import Button from "./Button";

export default function PlayMusicModal() {
    const [showPlayList, setShowPlayList] = React.useState(true);
    const [showPlayNext, setShowPlayNext] = React.useState(false);
    return (
        <>
        <div className="Modal-top"
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "10px",
            paddingBottom: "20px",
        }}
        >
            <div className="Modal-top-left"
            style={{
                color: "white",
                opacity: "2",
                marginRight: "40px",
            }}
            >
                <Button 
                    onClick={() => {
                        setShowPlayList(true);
                        setShowPlayNext(false);
                    }}
                    style={{
                        background: showPlayList === true ? "blueviolet" : null,
                        width: "100px",
                        borderRadius: "10px",
                    }}
                >
                <p>Playlist</p>
                </Button>
            </div>
            <div className="Modal-top-right"
            style={{
                color: "white",
                opacity: "2",
                marginLeft: "40px",
            }}
            >
                <Button
                    onClick={() => {
                        setShowPlayNext(true);
                        setShowPlayList(false);
                    }}
                    style={{
                        background: showPlayNext === true ? "blueviolet" : null,
                        width: "100px",
                        borderRadius: "10px",
                    }}
                >
                <p>Play Next</p>
                </Button>
            </div>
        </div>
        <div className="Modal-body">
            {showPlayList ? (
                <ul style={{
                    color: "white",
                    opacity: "2",
                }}>
                    <li>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginInline: "10px",
                        }}
                        >
                            <img src="https://i.scdn.co/image/ab67616d00001e02bf5cce5a0e1ed03a626bdd74" alt="pn_1" width={'60px'} height={'60px'}/>
                            <p style={{marginLeft: '10px'}}>Playlist 1</p>
                        </div>
                    </li>
                </ul>
            ) : (
                <ul 
                style={{
                    color: "white",
                    opacity: "2",
                }}
                >
                    <li>
                        <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginInline: "10px",
                        }}
                        >
                            <img src="https://i.scdn.co/image/ab67616d00001e02bf5cce5a0e1ed03a626bdd74" alt="pn_1" width={'60px'} height={'60px'}/>
                            <p style={{marginLeft: '10px'}}>Play Next 1</p>
                        </div>
                    </li>
                    <li>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginInline: "10px",
                        }}
                        >
                            <img src="https://i.scdn.co/image/ab67616d00001e02dc031e2429585e32b4ccb69b" alt="pn_1" width={'60px'} height={'60px'}/>
                            <p style={{marginLeft: '10px'}}>Play next 2</p>
                        </div>
                    </li>
                    <li>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginInline: "10px",
                        }}
                        >
                            <img src="https://i.scdn.co/image/ab67616d00001e022461003df8139247949c8a9d" alt="pn_1" width={'60px'} height={'60px'}/>
                            <p style={{marginLeft: '10px'}}>Play next 3</p>
                        </div>
                    </li>
                    <li>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginInline: "10px",
                        }}
                        >
                            <img src="https://i.scdn.co/image/ab67616d00001e022f1a5b69c2bd76474bca8035" alt="pn_1" width={'60px'} height={'60px'}/>
                            <p style={{marginLeft: '10px'}}>Play next 4</p>
                        </div>
                    </li>
                </ul>
            )}
        </div>
        </>
    );
}