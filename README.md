# README

* Author: Nicholas Martin (nmmart04@louisville.edu)
* Date: 1/26/2022

## Description

* This project demonstrates a blind SQL injection vulnerability by intentionally string formatting user-controlled input directly into a login SQL query.
* This was created for the University of Louisville's Database Security Professor Ghiyoung Im.

## Branches

* The `main` branch is vulnerable.
* The `patched` branch properly parametrizes the user input.

## How to Build

* First download and install the [dotnet 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
* You can build the project with the following command:
  * `dotnet publish -c release --output MyOutputFolderPath PathToSourceCode\DatabaseHomework4.sln`
* In order to update the connection string, modify the key-value pair in the JSON file `PathToSourceCode\DatabaseHomework4\appsettings.json` under "Connection Strings", specifically the "conn" key's value.
* Optionally: if you want to develop further, you will need [Visual Studio 2022](https://visualstudio.microsoft.com/vs/).
  * You must have the [ASP.NET and web development workload](https://visualstudio.microsoft.com/vs/) installed to Visual Studio.
