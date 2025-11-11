const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center mb-4">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                Player de vídeo (VSL será incorporado aqui)
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground italic">
            Assista até o final para entender por que esse método tem transformado tantas mulheres.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
