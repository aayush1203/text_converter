$(document).ready(function(){
    let button=$('#btn');
    let file=$('#tfile');
    let value=$('');

    // async function detectText(fileName){
    //     const vision = require('@google-cloud/vision');
      
    //     // Creates a client
    //     const client = new vision.ImageAnnotatorClient();
      
    //     /**
    //      * TODO(developer): Uncomment the following line before running the sample.
    //      */
    //     // const fileName = 'Local image file, e.g. /path/to/image.png';
      
    //     // Read a local image as a text document
    //     const [result] = await client.documentTextDetection(fileName);
    //     const fullTextAnnotation = result.fullTextAnnotation;
    //     console.log(`Full text: ${fullTextAnnotation.text}`);
    //     fullTextAnnotation.pages.forEach(page => {
    //       page.blocks.forEach(block => {
    //         console.log(`Block confidence: ${block.confidence}`);
    //         block.paragraphs.forEach(paragraph => {
    //           console.log(`Paragraph confidence: ${paragraph.confidence}`);
    //           paragraph.words.forEach(word => {
    //             const wordText = word.symbols.map(s => s.text).join('');
    //             console.log(`Word text: ${wordText}`);
    //             console.log(`Word confidence: ${word.confidence}`);
    //             word.symbols.forEach(symbol => {
    //               console.log(`Symbol text: ${symbol.text}`);
    //               console.log(`Symbol confidence: ${symbol.confidence}`);
    //             });
    //           });
    //         });
    //       });
    //     });
    //   }
    //   detectText('maak2.jpg')

    function network(){
        $.ajax({
			url: `/text?task=${value}`,
			method: 'get',
			success: function(data){
				$('p').append(data);		
			}
		})
    }
    console.log("hello");
    $("#btn").click(function(){
        value=$(tfile).val();
        console.log(value);
        console.log($("#fname").val());
        network($("#fname").val());
        // detectText('maak2.jpg')
    })
})