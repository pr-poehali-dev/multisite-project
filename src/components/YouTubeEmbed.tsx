
import { useState, useEffect } from 'react';

interface YouTubeEmbedProps {
  channelId: string;
  maxResults?: number;
}

const YouTubeEmbed = ({ channelId, maxResults = 3 }: YouTubeEmbedProps) => {
  // В реальном проекте здесь должен быть код для загрузки видео с API YouTube
  // Поскольку для этого требуется API-ключ, используем фиктивные данные
  
  const videos = [
    { id: "video1", title: "Электрик Колпино 89500308830" },
    { id: "video2", title: "Электрик Колпино 89500308830" },
    { id: "video3", title: "Электрик Колпино 89500308830" }
  ];

  return (
    <div className="w-full py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Наши видео</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <div key={video.id} className="flex flex-col">
            <div className="relative pt-[56.25%] w-full bg-muted rounded-md overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="mt-2 font-medium">{video.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a 
          href="https://youtube.com/@elektrikkolpino" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Смотреть все видео на YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
