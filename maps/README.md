Leaflet.Photo
=============

Created by Bjørn Sandvik at [Themaic Mapping] (http://thematicmapping.org/)

See:

[Read this blog post](http://blog.thematicmapping.org/2014/08/showing-geotagged-photos-on-leaflet-map.html)

local_file_example
=============

Created by Heikki Vesanto at [GIS for Thought] (http://GISforThought.com/)

Setup:
=============
Using getphotos.php the index.html page will show a map with all the photos (.jpeg and .tif) in the Photos folder that have exif gps info.

Your web host has to support PHP for this to work.

Simply download the whole local_file_example folder, delete the images in the Photos and Photos_Thumbnail folder, and put your photos in the Photos folder.

By default the photo will also be used as the thumbnail, just resized.

What if my photos have thumbnails?
=============

If you have thumbnail images, they need to have the same name as the original image and need to be put into the Photos_Thumbnail folder.

The thumbnails should be at least 40px by 40px, but can be larger. Larger images will be resied to a 40px byt 40px thumbnail.

Then you need to edit the index .html lines 76-78:

	//If you have thumbnails, switch the comments on the following lines.
	thumbnail: images[i].filename
	//thumbnail: images[i].thumbnail

TO:

	//If you have thumbnails, switch the comments on the following lines.
	//thumbnail: images[i].filename
	thumbnail: images[i].thumbnail

What if my photos are in a different folder?
=============

Simply edit the getphotos.php file:

    //The directory (relative to this file) that holds the images
    $dir = "Photos";
	
	//The directory (relative to this file) that holds the thumbnails, they have to have the same name as the photos
	$thumb_dir = "Photos_Thumbnail";
	
Examples:
=============

[Without thumbnail images.] (http://maps.gisforthought.com/local_file_example/index.html)

[With thumbnails.] (http://maps.gisforthought.com/local_file_example/index_thumb.html)
