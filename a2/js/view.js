'use strict';

/**
 * A function that creates and returns all of the model classes and constants.
  */
function createViewModule() {

    var LIST_VIEW = 'LIST_VIEW';
    var GRID_VIEW = 'GRID_VIEW';
    var RATING_CHANGE = 'RATING_CHANGE';

    /**
     * An object representing a DOM element that will render the given ImageModel object.
     */
    var ImageRenderer = function(imageModel) {
        this.model = imageModel;
        this.view = GRID_VIEW;
    };

    _.extend(ImageRenderer.prototype, {

        /**
         * Returns an element representing the ImageModel, which can be attached to the DOM
         * to display the ImageModel.
         */
        getElement: function() {
                var self = this;
                var newd = document.createElement('div');
                var gt = document.getElementById('gridimagetemplate');
                var lt = document.getElementById('listimagetemplate');
                console.log(self.view);
                if(this.view === null) {
                    return newd;
                }
                if(this.view === GRID_VIEW) {
                    newd.innerHTML = gt.innerHTML;
                    newd.className = "griddiv";
                } else {
                    newd.innerHTML = lt.innerHTML;
                    newd.className = "listdiv";
                }
                var cn = newd.childNodes;
                var newimg = document.createElement('img');

                console.log(this.model.getPath());
                console.log(cn.length);
                newimg.src = this.model.getPath();
                newimg.style.width = '99%';
                newimg.style.height = '99%';
                cn[1].appendChild(newimg);

                var cn2 = cn[3].childNodes;
                var name = this.model.getPath().substring(7);
                cn2[1].innerText = name;
                var s = this.model.getModificationDate();
                var date = s.getMonth() + "/" + s.getDate() + "/" + s.getFullYear();
                cn2[3].innerText = date;
                var cn3 = cn2[5].childNodes;
                var firstspan = cn3[0];
                var secondspan = cn3[1];
                var thirdspan = cn3[2];
                var fourthspan = cn3[3];
                var fifthspan = cn3[4];
                firstspan.id = name + "one";
                secondspan.id = name + "two";
                thirdspan.id = name + "three";
                fourthspan.id = name + "four";
                fifthspan.id = name + "five";
                if (this.model.getRating() === 0) {
                    firstspan.style.color = 'black';
                    secondspan.style.color = 'black';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                } else if (this.model.getRating() === 1) {
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'black';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                } else if (this.model.getRating() === 2) {
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                } else if (this.model.getRating() === 3) {
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                } else if (this.model.getRating() === 4) {
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'black';
                } else if (this.model.getRating() === 5) {
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'gold';
                }
                firstspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'black';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                secondspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                thirdspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                fourthspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'black';
                })
                fifthspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'gold';
                })

                firstspan.addEventListener("click",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'black';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                    self.model.setRating(1);
                })
                secondspan.addEventListener("click",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                    self.model.setRating(2);
                })
                thirdspan.addEventListener("click",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                    self.model.setRating(3);
                })
                fourthspan.addEventListener("click",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'black';
                    self.model.setRating(4);
                })
                fifthspan.addEventListener("click",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'gold';
                    self.model.setRating(5);
                })

                firstspan.addEventListener("mouseout",function(){
                    var rating = self.model.getRating();
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                secondspan.addEventListener("mouseout",function(){
                    var rating = self.model.getRating();
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                thirdspan.addEventListener("mouseout",function(){
                    var rating = self.model.getRating();
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                fourthspan.addEventListener("mouseout",function(){
                    var rating = self.model.getRating();
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                fifthspan.addEventListener("mouseout",function(){
                    var rating = self.model.getRating();
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                return newd;
        },

        /**
         * Returns the ImageModel represented by this ImageRenderer.
         */
        getImageModel: function() {
            return this.model;
        },

        /**
         * Sets the ImageModel represented by this ImageRenderer, changing the element and its
         * contents as necessary.
         */
        setImageModel: function(imageModel) {
            this.model = imageModel;
        },

        /**
         * Changes the rendering of the ImageModel to either list or grid view.
         * @param viewType A string, either LIST_VIEW or GRID_VIEW
         */
        setToView: function(viewType) {
            this.view = viewType;
        },

        /**
         * Returns a string of either LIST_VIEW or GRID_VIEW indicating which view type it is
         * currently rendering.
         */
        getCurrentView: function() {
            return this.view;
        }
    });

    /**
     * A factory is an object that creates other objects. In this case, this object will create
     * objects that fulfill the ImageRenderer class's contract defined above.
     */
    var ImageRendererFactory = function() {
    };

    _.extend(ImageRendererFactory.prototype, {

        /**
         * Creates a new ImageRenderer object for the given ImageModel
         */
        createImageRenderer: function(imageModel) {
            var render = new ImageRenderer(imageModel);
            return render;
        }
    });

    /**
     * An object representing a DOM element that will render an ImageCollectionModel.
     * Multiple such objects can be created and added to the DOM (i.e., you shouldn't
     * assume there is only one ImageCollectionView that will ever be created).
     */
    var ImageCollectionView = function() {
        var self = this;
        this.rendererFactory = new ImageRendererFactory();
        this.view = GRID_VIEW;
        this.imagecollectionmodel = null;
        this.imageRenderers = [];
    };

    _.extend(ImageCollectionView.prototype, {
        /**
         * Returns an element that can be attached to the DOM to display the ImageCollectionModel
         * this object represents.
         */
        getElement: function() {
            var d = document.createElement('div');
            for (var j = 0; j < this.imageRenderers.length ; j++) {
                this.imageRenderers[j].setToView = this.view;
                d.appendChild(this.imageRenderers[j].getElement());
            }
            return d;
        },

        /**
         * Gets the current ImageRendererFactory being used to create new ImageRenderer objects.
         */
        getImageRendererFactory: function() {
            return this.rendererFactory;
        },

        /**
         * Sets the ImageRendererFactory to use to render ImageModels. When a *new* factory is provided,
         * the ImageCollectionView should redo its entire presentation, replacing all of the old
         * ImageRenderer objects with new ImageRenderer objects produced by the factory.
         */
        setImageRendererFactory: function(imageRendererFactory) {
            this.rendererFactory = imageRendererFactory;
            this.imageRenderers = [];
            var models = this.imagecollectionmodel.getImageModels();
            for (i = 0; i < models.length; i++) {
                    this.imageRenderers.push(this.rendererFactory.createImageRenderer(models[i]));
            }
        },

        /**
         * Returns the ImageCollectionModel represented by this view.
         */
        getImageCollectionModel: function() {
            return this.imagecollectionmodel;
        },

        /**
         * Sets the ImageCollectionModel to be represented by this view. When setting the ImageCollectionModel,
         * you should properly register/unregister listeners with the model, so you will be notified of
         * any changes to the given model.
         */
        setImageCollectionModel: function(imageCollectionModel) {
            if (this.imagecollectionmodel !== null) {
                var ls = this.imagecollectionmodel.getListeners();
                var l = ls.length();
                for(var i=0;i<l;i++) {
                    this.imagecollectionmodel.removeListener(ls[0]);
                }
                this.imagecollectionmodel = imageCollectionModel;
                this.imagecollectionmodel.listerners = ls;
                var models = this.imagecollectionmodel.getImageModels();
                    for (var i = 0; i < models.length; i++) {
                        this.imageRenderers.push(this.rendererFactory.createImageRenderer(models[i]));
                    }      
            } else {
                this.imagecollectionmodel = imageCollectionModel;
                var models = this.imagecollectionmodel.getImageModels();
                    for (var i = 0; i < models.length; i++) {
                        this.imageRenderers.push(this.rendererFactory.createImageRenderer(models[i]));
                    }
                }
        },

        /**
         * Changes the presentation of the images to either grid view or list view.
         * @param viewType A string of either LIST_VIEW or GRID_VIEW.
         */
        setToView: function(viewType) {
                if(this.view !== viewType) {
                    for(var i = 0; i<this.imageRenderers.length ; i++) {
                        this.imageRenderers[i].view=viewType;
                    }
                }
        },

        /**
         * Returns a string of either LIST_VIEW or GRID_VIEW indicating which view type is currently
         * being rendered.
         */
        getCurrentView: function() {
            return self.view;
        }
    });

    /**
     * An object representing a DOM element that will render the toolbar to the screen.
     */
    var Toolbar = function() {
        var self = this;
        this.rating_filter = 0;
        this.listeners = [];
        this.view = GRID_VIEW;
    };

    _.extend(Toolbar.prototype, {
        /**
         * Returns an element representing the toolbar, which can be attached to the DOM.
         */
        getElement: function() {
            var s = this;
            var toolbartemplate = document.getElementById('headertemplate');
            var toolbar = document.createElement('div');
            toolbar.innerHTML = toolbartemplate.innerHTML;
            toolbar.id = "myheader";
            var cn2 = toolbar.childNodes;
            var cn = cn2[6].childNodes;
            var firstspan = cn[1];
            var secondspan = cn[2];
            var thirdspan = cn[3];
            var fourthspan = cn[4];
            var fifthspan = cn[5];
            firstspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'black';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                secondspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'black';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                thirdspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'black';
                    fifthspan.style.color = 'black';
                })
                fourthspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'black';
                })
                fifthspan.addEventListener("mouseover",function(){
                    firstspan.style.color = 'gold';
                    secondspan.style.color = 'gold';
                    thirdspan.style.color = 'gold';
                    fourthspan.style.color = 'gold';
                    fifthspan.style.color = 'gold';
                })

                firstspan.addEventListener("mouseout",function(){
                    var rating = s.rating_filter;
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                    secondspan.addEventListener("mouseout",function(){
                    var rating = s.rating_filter;
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                thirdspan.addEventListener("mouseout",function(){
                    var rating = s.rating_filter;
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                fourthspan.addEventListener("mouseout",function(){
                    var rating = s.rating_filter;
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })
                fifthspan.addEventListener("mouseout",function(){
                    var rating = s.rating_filter;
                    if (rating === 1) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 2) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 3) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } else if (rating === 4) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'black';
                    } else if (rating === 5) {
                        firstspan.style.color = 'gold';
                        secondspan.style.color = 'gold';
                        thirdspan.style.color = 'gold';
                        fourthspan.style.color = 'gold';
                        fifthspan.style.color = 'gold';
                    } else {
                        firstspan.style.color = 'black';
                        secondspan.style.color = 'black';
                        thirdspan.style.color = 'black';
                        fourthspan.style.color = 'black';
                        fifthspan.style.color = 'black';
                    } 
                })

            return toolbar;
        },

        /**
         * Registers the given listener to be notified when the toolbar changes from one
         * view type to another.
         * @param listener_fn A function with signature (toolbar, eventType, eventDate), where
         *                    toolbar is a reference to this object, eventType is a string of
         *                    either, LIST_VIEW, GRID_VIEW, or RATING_CHANGE representing how
         *                    the toolbar has changed (specifically, the user has switched to
         *                    a list view, grid view, or changed the star rating filter).
         *                    eventDate is a Date object representing when the event occurred.
         */
        addListener: function(listener_fn) {
            this.listeners.push(listener_fn);
        },

        /**
         * Removes the given listener from the toolbar.
         */
        removeListener: function(listener_fn) {
            var index = this.listeners.indexOf(listener_fn);
                if (index !== -1) {
                    this.listeners.splice(index, 1);
                }
        },

        /**
         * Sets the toolbar to either grid view or list view.
         * @param viewType A string of either LIST_VIEW or GRID_VIEW representing the desired view.
         */
        setToView: function(viewType) {
            if(this.view !== viewType) {
                this.view = viewType;
                var s = this
                _.each(
                    this.listeners,
                        function(listener_fn) {
                            listener_fn(s,viewType,Date(Date.now()))
            });
            }
        },

        /**
         * Returns the current view selected in the toolbar, a string that is
         * either LIST_VIEW or GRID_VIEW.
         */
        getCurrentView: function() {
            return this.view;
        },

        /**
         * Returns the current rating filter. A number in the range [0,5], where 0 indicates no
         * filtering should take place.
         */
        getCurrentRatingFilter: function() {
            return this.rating_filter;
        },

        /**
         * Sets the rating filter.
         * @param rating An integer in the range [0,5], where 0 indicates no filtering should take place.
         */
        setRatingFilter: function(rating) {
            if(rating !== self.rating_filter) {
            var s = this;
            this.rating_filter=rating; 
            _.each(
                    this.listeners,
                        function(listener_fn) {
                            listener_fn(s,RATING_CHANGE,Date(Date.now()))
                    });
            }
        }
    });

    /**
     * An object that will allow the user to choose images to display.
     * @constructor
     */
    var FileChooser = function() {
        this.listeners = [];
        this._init();
    };

    _.extend(FileChooser.prototype, {
        // This code partially derived from: http://www.html5rocks.com/en/tutorials/file/dndfiles/
        _init: function() {
            var self = this;
            this.fileChooserDiv = document.createElement('div');
            var fileChooserTemplate = document.getElementById('file-chooser');
            this.fileChooserDiv.appendChild(document.importNode(fileChooserTemplate.content, true));
            var fileChooserInput = this.fileChooserDiv.querySelector('.files-input');
            fileChooserInput.addEventListener('change', function(evt) {
                var files = evt.target.files;
                var eventDate = new Date();
                _.each(
                    self.listeners,
                    function(listener_fn) {
                        listener_fn(self, files, eventDate);
                    }
                );
            });
        },

        /**
         * Returns an element that can be added to the DOM to display the file chooser.
         */
        getElement: function() {
            return this.fileChooserDiv;
        },

        /**
         * Adds a listener to be notified when a new set of files have been chosen.
         * @param listener_fn A function with signature (fileChooser, fileList, eventDate), where
         *                    fileChooser is a reference to this object, fileList is a list of files
         *                    as returned by the File API, and eventDate is when the files were chosen.
         */
        addListener: function(listener_fn) {
            if (!_.isFunction(listener_fn)) {
                throw new Error("Invalid arguments to FileChooser.addListener: " + JSON.stringify(arguments));
            }
            this.listeners.push(listener_fn);
        },

        /**
         * Removes the given listener from this object.
         * @param listener_fn
         */
        removeListener: function(listener_fn) {
            if (!_.isFunction(listener_fn)) {
                throw new Error("Invalid arguments to FileChooser.removeListener: " + JSON.stringify(arguments));
            }
            this.listeners = _.without(this.listeners, listener_fn);
        }
    });

    // Return an object containing all of our classes and constants
    return {
        ImageRenderer: ImageRenderer,
        ImageRendererFactory: ImageRendererFactory,
        ImageCollectionView: ImageCollectionView,
        Toolbar: Toolbar,
        FileChooser: FileChooser,

        LIST_VIEW: LIST_VIEW,
        GRID_VIEW: GRID_VIEW,
        RATING_CHANGE: RATING_CHANGE
    };
}