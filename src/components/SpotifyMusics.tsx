import { iMusics } from "@/interfaces/spotifyInterface";
import { getTopMusics } from "@/services/spotifyService";
import { useState, useEffect } from "react";
import { Box, Typography, Paper, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SpotifyMusics() {
  const [topMusics, setTopMusics] = useState<iMusics>();
  const [loading, setLoading] = useState(true);

  async function handleGetTopMusics() {
    setLoading(true);
    try {
      const response = await getTopMusics();
      setTopMusics(response);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetTopMusics();
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
          height={300}
          animation="wave"
          sx={{ padding: "2em" }}
        ></Skeleton>
      ) : topMusics?.items?.length! > 0 ? (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            // spaceBetween={50}
            slidesPerView={1}
            style={{ borderRadius: 12 }}
          >
            {topMusics?.items.map((music) => (
              <SwiperSlide key={music.id}>
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
                    src={`https://open.spotify.com/embed/track/${music.id}`}
                    width="90%"
                    height="200"
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
