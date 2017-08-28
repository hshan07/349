'use strict';

// This should be your main point of entry for your app
    var LIST_VIEW = 'LIST_VIEW';
    var GRID_VIEW = 'GRID_VIEW';
    var RATING_CHANGE = 'RATING_CHANGE';
    var IMAGE_ADDED_TO_COLLECTION_EVENT = 'IMAGE_ADDED_TO_COLLECTION_EVENT';
    var IMAGE_REMOVED_FROM_COLLECTION_EVENT = 'IMAGE_REMOVED_FROM_COLLECTION_EVENT';
    var IMAGE_META_DATA_CHANGED_EVENT = 'IMAGE_META_DATA_CHANGED_EVENT';


window.addEventListener('load', function() {
    //localStorage.clear();
    var modelModule = createModelModule();
    var viewModule = createViewModule();
    var appContainer = document.getElementById('app-container');
    appContainer.innerHTML = '';

    var tb = new viewModule.Toolbar();
    document.body.appendChild(tb.getElement());
    tb.setToView(GRID_VIEW);

    var imageCollectionView = new viewModule.ImageCollectionView();

    var imageCollectionModel = modelModule.loadImageCollectionModel();


    for(var i=0; i< imageCollectionModel.imageModels.length;i++) {
        imageCollectionModel.imageModels[i].addListener(function(imageModel, eventTime){
                    modelModule.storeImageCollectionModel(imageCollectionModel);
                })
    }

    if(imageCollectionModel.listeners.length === 0) {
        imageCollectionModel.addListener(function(eventType, imageModelCollection, imageModel, eventDate) {
            if(eventType === IMAGE_ADDED_TO_COLLECTION_EVENT) {
                appContainer.innerHTML = "";
                imageCollectionView = new viewModule.ImageCollectionView();
                imageCollectionView.setImageCollectionModel(imageModelCollection);
                imageCollectionView.setToView(tb.getCurrentView());
                appContainer.appendChild(fileChooser.getElement());
                appContainer.appendChild(imageCollectionView.getElement());
                tb.setRatingFilter(tb.getCurrentRatingFilter());
            } else if (eventType === IMAGE_REMOVED_FROM_COLLECTION_EVENT) {
                appContainer.innerHTML = '';
                imageCollectionView = new viewModule.ImageCollectionView();
                imageCollectionView.setImageCollectionModel(imageModelCollection);
                imageCollectionView.setToView(tb.getCurrentView());
                appContainer.appendChild(fileChooser.getElement());
                appContainer.appendChild(imageCollectionView.getElement());
                tb.setRatingFilter(tb.getCurrentRatingFilter());
            } else if (eventType === IMAGE_META_DATA_CHANGED_EVENT) {
                appContainer.innerHTML = '';
                imageCollectionView = new viewModule.ImageCollectionView();
                imageCollectionView.setImageCollectionModel(imageModelCollection);
                imageCollectionView.setToView(tb.getCurrentView());
                appContainer.appendChild(fileChooser.getElement());
                appContainer.appendChild(imageCollectionView.getElement());
                tb.setRatingFilter(tb.getCurrentRatingFilter());
            }
        })
    }



    imageCollectionView.setImageCollectionModel(imageCollectionModel);
    imageCollectionView.setToView(GRID_VIEW);


    

    tb.addListener(function(toolbar, eventType, eventDate) {
        if(eventType === LIST_VIEW) {
            imageCollectionView.setToView(LIST_VIEW);
            var gridbutton = document.getElementById("gridbutton");
            var listbutton = document.getElementById("listbutton");
            gridbutton.style.backgroundColor = 'grey';
            listbutton.style.backgroundColor = '#3366FF';
            var gd = document.getElementsByClassName("griddiv");
            var l1 = gd.length;
            for(var i=0 ; i< l1; i++) {
                gd[0].className = "listdiv";
            }

            var gi = document.getElementsByClassName("gridimage");
            for(var j=0 ; j< l1; j++) {
                gi[0].className = "listimage";
            }

            var gii = document.getElementsByClassName("gridimageinformation");
            for(var i=0 ; i< l1; i++) {
                gii[0].className = "listimageinformation";
            }

            var gin = document.getElementsByClassName("gridimagename");
            for(var i=0 ; i<l1;i++) {
                gin[0].className = "listimagename";
            }

            var glm = document.getElementsByClassName("gridlastmodifieddate");
            for(var i=0 ; i<l1;i++) {
                glm[0].className = "listlastmodifieddate";
            }

            var gr = document.getElementsByClassName("gridrating");
            for(var i=0 ; i<l1;i++) {
                gr[0].className = "listrating";
            }

        } else if (eventType === GRID_VIEW) {
            imageCollectionView.setToView(GRID_VIEW);
            var gridbutton = document.getElementById("gridbutton");
            var listbutton = document.getElementById("listbutton");
            gridbutton.style.backgroundColor = '#3366FF';
            listbutton.style.backgroundColor = 'grey';
            var ld = document.getElementsByClassName("listdiv");
            var l2 = ld.length;
            for(var i=0 ; i< l2; i++) {
                ld[0].className = "griddiv";
            }

            var li = document.getElementsByClassName("listimage");
            for(var i=0 ; i< l2; i++) {
                li[0].className = "gridimage";
            }

            var lii = document.getElementsByClassName("listimageinformation");
            for(var i=0 ; i< l2; i++) {
                lii[0].className = "gridimageinformation";
            }

            var lin = document.getElementsByClassName("listimagename");
            for(var i=0 ; i<l2;i++) {
                lin[0].className = "gridimagename";
            }

            var llm = document.getElementsByClassName("listlastmodifieddate");
            for(var i=0 ; i<l2;i++) {
                llm[0].className = "gridlastmodifieddate";
            }

            var lr = document.getElementsByClassName("listrating");
            for(var i=0 ; i<l2;i++) {
                lr[0].className = "gridrating";
            }
        } else if (eventType === RATING_CHANGE) {
            var child = appContainer.childNodes;
            var divs = child[1].childNodes;
            var rating = tb.getCurrentRatingFilter();
            for(var i = 0; i < divs.length ; i++) {
                var models = imageCollectionModel.imageModels;
                var r = models[i].getRating();
                if(r < rating) {
                    divs[i].style.display = 'none';
                }
                if(r >= rating) {
                    divs[i].style.display = 'inline-block';
                }
            }
        }
    });

    var gridbutton = document.getElementById("gridbutton");
    var listbutton = document.getElementById("listbutton");
    gridbutton.style.backgroundColor = '#3366FF';
    listbutton.style.backgroundColor = 'grey';

    gridbutton.addEventListener("click",function(){
        tb.setToView(GRID_VIEW);
    })

    listbutton.addEventListener("click",function(){
        tb.setToView(LIST_VIEW);
    })

    var firststar = document.getElementById('filteronestar');
    var secondstar = document.getElementById('filtertwostar');
    var thirdstar = document.getElementById('filterthreestar');
    var fourthstar = document.getElementById('filterfourstar');
    var fifthstar = document.getElementById('filterfivestar');

                firststar.addEventListener("click",function(){
                    firststar.style.color = 'gold';
                    secondstar.style.color = 'black';
                    thirdstar.style.color = 'black';
                    fourthstar.style.color = 'black';
                    fifthstar.style.color = 'black';
                    tb.setRatingFilter(1);
                })
                secondstar.addEventListener("click",function(){
                    firststar.style.color = 'gold';
                    secondstar.style.color = 'gold';
                    thirdstar.style.color = 'black';
                    fourthstar.style.color = 'black';
                    fifthstar.style.color = 'black';
                    tb.setRatingFilter(2);
                })
                thirdstar.addEventListener("click",function(){
                    firststar.style.color = 'gold';
                    secondstar.style.color = 'gold';
                    thirdstar.style.color = 'gold';
                    fourthstar.style.color = 'black';
                    fifthstar.style.color = 'black';
                    tb.setRatingFilter(3);
                })
                fourthstar.addEventListener("click",function(){
                    firststar.style.color = 'gold';
                    secondstar.style.color = 'gold';
                    thirdstar.style.color = 'gold';
                    fourthstar.style.color = 'gold';
                    fifthstar.style.color = 'black';
                    tb.setRatingFilter(4);
                })
                fifthstar.addEventListener("click",function(){
                    firststar.style.color = 'gold';
                    secondstar.style.color = 'gold';
                    thirdstar.style.color = 'gold';
                    fourthstar.style.color = 'gold';
                    fifthstar.style.color = 'gold';
                    tb.setRatingFilter(5);
                })


    // Attach the file chooser to the page. You can choose to put this elsewhere, and style as desired
    var fileChooser = new viewModule.FileChooser();
    appContainer.appendChild(fileChooser.getElement());

    var view = imageCollectionView.getElement();
    appContainer.appendChild(view);


    fileChooser.addListener(function(fileChooser, files, eventDate) {
        _.each(
            files,
            function(file) {
                var newDiv = document.createElement('div');
                var fileInfo = "File name: " + file.name + ", last modified: " + file.lastModifiedDate;
                newDiv.innerText = fileInfo;
                var im = new modelModule.ImageModel(
                        'images/' + file.name,
                        file.lastModifiedDate,
                        '',
                        0
                    );
                im.addListener(function(imageModel, eventTime){
                    modelModule.storeImageCollectionModel(imageCollectionModel);
                });
                imageCollectionModel.addImageModel(im);
            }
        );
        modelModule.storeImageCollectionModel(imageCollectionModel);
    });

    // Demo retrieval
    var storedImageCollection = modelModule.loadImageCollectionModel();
});