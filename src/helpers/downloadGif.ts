export const downloadGif = async  ( url: string, fileName: string ) => {
    try {
        const response = await fetch(url);
        
        const blob = await response.blob();
    
        const downloadLink = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
    
        downloadLink.href = objectUrl;
        downloadLink.download = fileName;
        downloadLink.click();
    
        URL.revokeObjectURL(objectUrl);
      } catch (error) {
        console.error('Error al descargar el GIF:', error);
      }
}