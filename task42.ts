function showByMagicians(maggicians: string[]): void {
    maggicians.forEach(magiciaan => {
      console.log(magiciaan);
    });
  }
  
  // Example usage
  const magiciians: string[] = ["Merlin", "Houdini", "David Copperfield"];
  showByMagicians(magiciians);
  

function makesGreat(maagicians: string[]): string[] {
    return maagicians.map(magiccian => `The Great ${magiccian}`);
  }
  
  // Example usage
  const greatMagiciansAre: string[] = makesGreat(magiciians);
  showByMagicians(greatMagiciansAre);
  