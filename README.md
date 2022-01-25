# Dynamic Startpage

A dynamic startpage using a JSON file to build links into categories for easy access.

## Installation
1) Download the latest release files.
2) Inside the root folder, create a file named "collection.json".
3) Inside this file, write all of your links to match the format shown below

```JSON
{
    "collection" : [
        {
            "category" : "category name",
            "links" : [
                {
                    "name" : "Google",
                    "link" : "https://google.com",
                    "icon" : "https://link-to-image.com/image.png"
                }
            ]
        },

        {
            "category" : "category name",
            "links" : [
                {
                    "name" : "Google",
                    "link" : "https://google.com",
                    "icon" : "https://link-to-image.com/image.png"
                }
            ]
        }
    ]
}

```

4) Once completed, upload the folder in its entirety to your hosting provider of choice and setup for use.

## Usage

If the build was successful, your page should look similar to this.

![Screenshot of a successful build](images\successful_build_screenshot.jpg)