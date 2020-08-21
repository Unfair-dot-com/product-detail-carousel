# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Initialization](#Initialization)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

- AWS account with an S3 bucket created (bucket name and region will be required for the setup).
- AWS account with access keys generated (access key id and secret). Ideally, you want to have an IAM user account (not your master AWS account) with only a subset of permissions on the bucket.
- A folder named "images" with three subfolders "small", "medium", "large", created in the cloned repo. In each subfolder, place the same set of .jpg images (they have to be .jpg with this version of the code) with different widths for each subfolder ("small" = 170px, "medium" = 250px, "large" = 340px).
- MongoDB server, up and running.

## Initialization

- Inside the "/server/config" folder, create a copy of the api_keys_example.js and name it "api_keys.js".
- In "api_keys.js", assign your AWS key/secret pair to the respective properties.
- Inside the "/server/config" folder, in "filestore.js" change the "bucket" and "region" properties with the values of your bucket name and region, respectively.
- Inside the "/server/config" folder, in "init.js" change the "remotePath" property to match your bucket name and region for the first two parts of the URL (e.g. replace bucket_name with your bucket name, and "region" with your bucket region "https://bucket_name.region.amazonaws.com/").
- Run this command while inside the repo folder "npm install".
- WARNING! This command will delete all items in your S3 bucket that contain words "small", "medium", "large" in their names, and create three folders (named "small", "medium", "large") with a set of images that you have in "/images/*" of the repo folder. In the terminal, run this command "npm run init-images". If everything goes well, you should see printed arrays of all the three sets of images (small, medium, large). Do not continue if there are any errors other than "Remote directory is already empty." (this is just a warning that there was an attempt to delete something that doesn't exist).
- WARNING! This command will delete the MongoDB database named "pdc" (if one exists) and all of its contents (i.e. all collections of the db). In the terminal, run this command "npm run init-database". If everything goes well, you will see an array of ids of the entries from the db. Do not continue if there are any errors other than "Products collection doesn't exist." (this is just a warning that there was an attempt to delete something that doesn't exist).
- Run the following commands: "npm run build", "npm run start" and your component should be served on http://localhost:5003/products/0/.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

