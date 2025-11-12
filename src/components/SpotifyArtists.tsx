import { iMusics } from "@/interfaces/spotifyInterface";
import { getTopArtists, getTopMusics } from "@/services/spotifyService";
import { useState, useEffect } from "react";
import { Box, Typography, Paper, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SpotifyArtists() {
  const [topArtists, setTopArtists] = useState<iMusics>();
  const [loading, setLoading] = useState(true);

  async function handleGetTopArtists() {
    setLoading(true);
    try {
      const response = await getTopArtists();
      setTopArtists(response);
    } catch (error) {
      console.error("Erro ao buscar artistas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetTopArtists();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        border: "2px black solid",
        borderRadius: "1rem",
      }}
    >
      {loading ? (
        <Skeleton
          variant="rounded"
          width={"100%"}
          height={500}
          animation="wave"
          sx={{ padding: "2em" }}
        ></Skeleton>
      ) : topArtists?.items?.length! > 0 ? (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            style={{ borderRadius: 12 }}
          >
            {topArtists?.items.map((artist) => (
              <SwiperSlide key={artist.id}>
                <Paper
                  sx={{
                    background: "rgba(118, 189, 236, 0.5)",
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  elevation={4}
                >
                  <iframe
                    src={`https://open.spotify.com/embed/artist/${artist.id}`}
                    width="90%"
                    height="400"
                    allow="encrypted-media"
                    style={{ borderRadius: 8, marginBottom: "1em" }}
                  ></iframe>
                  {/* <Typography variant="subtitle1" color="white" mt={1}>
                    {music.name}
                  </Typography> */}
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <span>Nenhuma música encontrada.</span>
      )}
    </Box>
  );
}
