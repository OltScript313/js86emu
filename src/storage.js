var storage = {
    handleSelectedDiskImg : function (evt)
    {
    
        var file = evt.target.files[0]; // FileList object
        var reader = new FileReader();

        reader.onload = function(e) {
            cpu.loadBinary(0x00, reader.result);
        };

        reader.onerror = function(event) {
            console.error("File could not be read! Code " + event.target.error.code);
        };

        reader.readAsArrayBuffer(file);
    },
    
    load : function ()
    {
    /*
        var oBuilder = new BlobBuilder();
        var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
        oBuilder.append(aFileParts[0]);
        var oMyBlob = oBuilder.getBlob('text/xml'); // the blob
    */
        
    }
};
