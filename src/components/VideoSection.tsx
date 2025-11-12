import { useEffect } from "react";

const VideoSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/3f342a57-def9-4359-8f7d-a27e69cbe6fd/players/6913e15ba8ec6cb788b51241/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-0 pb-8 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
          <div 
            className="rounded-2xl mb-4"
            dangerouslySetInnerHTML={{
              __html: '<vturb-smartplayer id="vid-6913e15ba8ec6cb788b51241" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
            }}
          />
          <p className="text-center text-sm text-muted-foreground italic">
            Assista até o final para entender por que esse método tem transformado tantas mulheres.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
