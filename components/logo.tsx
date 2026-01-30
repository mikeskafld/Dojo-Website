export function VibeLogo() {
  return (
    <div className="flex flex-col h-full items-center justify-center group">
      <div className="h-8 w-8 transition-all duration-300 ease-in-out group-hover:scale-110">
        <div className="w-full h-full">
          <div className="bg-gradient-to-br from-card via-card/95 to-muted/90 dark:bg-gradient-to-br dark:from-pink-400/10 dark:via-pink-400/20 dark:to-pink-400/30 shadow-elevation-light dark:shadow-elevation-dark-three h-full w-full p-[2px] flex items-center justify-center transition-all duration-300 group-hover:p-[3px] group-hover:rotate-6">
            <div className="bg-card/20 dark:bg-card shadow-elevation-light dark:shadow-elevation-dark-three h-full w-full px-[2px] py-[2px] flex items-center justify-center transition-all duration-300 group-hover:bg-card/30 group-hover:rotate-[-12deg] group-hover:px-[3px] group-hover:py-[3px]">
              <div className="shadow-elevation-light dark:bg-pink-400/30 dark:shadow-elevation-dark-three p-[2px] w-full h-full transition-all duration-300 group-hover:rotate-[18deg] group-hover:p-[2.5px]">
                <div className="shadow-elevation-light dark:bg-card dark:shadow-elevation-dark-three p-[2px] w-full h-full transition-all duration-300 group-hover:rotate-[-24deg] group-hover:p-[2.5px]">
                  <div className="shadow-elevation-light dark:bg-pink-400/50 dark:shadow-elevation-dark-three p-[2px] w-full h-full transition-all duration-300 group-hover:rotate-[30deg] group-hover:p-[2.5px]">
                    <div className="shadow-elevation-light group-hover:bg-pink-400 dark:bg-card dark:shadow-elevation-dark-three p-[1px] w-full h-full transition-all duration-300 group-hover:rotate-[30deg] group-hover:p-[1.5px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
