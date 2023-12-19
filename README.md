# Hounslow Recycling Hub

**Hounslow Recycling Hub** is a web application which provides concise and
practical information about recycling in the **London Borough of Hounslow**. The
website was created during the 4th year of the MSci Computer Science degree
programme at King's College London, for the module 7CCSMGPR [Impact
Accelerator](https://www.kcl.ac.uk/informatics/engagement/impact-accelerator). 

## Features

* **Single page design.** All information is located on one page so as to be
  easily accessible; no more getting lost in a navigational web (you can close
  all those tabs now).

* **Minimal, relevant content.** Nobody wants to be overwhelmed with walls of
  text. Our goal is to show information that is relevant to you, in a simple,
  concise manner. Most content is 'hidden' unless you choose to reveal it.

* **Interactive design.** Click, click, click away! Our website contains many
  components for you to interact with. 

* **Navbar.** If one page is still too much, we have a handy navbar to help you
  navigate.

* **Fun facts.** Did you know that every year, British households create over
  26m tonnes of waste, which is equivalent to 260 large cruise ships? Well now
  you do.

* **Quiz questions.** What kind of items go in a red recycling box? Where do you
  put your empty metal cans? How can you recycle that old couch? Show off your
  street-smarts!

* **Events.** Find out what's happening in your borough and get involved!

* **Recycling Assistant.** So you want to recycle that *thing*, but you're not
  sure how? Just answer these simple questions, or let our **image recognition
  machine learning model** figure it out for you!   

* **Recycling Services.** All you need to know about the recycling services
  available to you.

* **Flytipping.** Have you see dumped rubbish where it shouldn't be? Let the
  borough know!

* **Content Management System (CMS).** Change is inevitable... and in our case
  easy. Almost everything on the website can be modified by you - no technical
  expertise needed!

NOTE: Hounslow Recycling Hub used AWS for its backend. These services have since
been disabled, which affects some of the functionality of the website. All data
is now loaded from files instead of being retrieved from a database. The CMS can
no longer be used to modify the data. Finally, the recycling assistant image
recognition machine learning model will now classify all images as rubbish. 

NOTE: The event carousel normally filters events so as to not show ones that
have taken place in the past. This has been disabled, as otherwise in time all
events will eventually become outdated. The "current date" of the website has
been frozen to "2023-03-31" in order to showcase the event carousel.

## Installation / Usage

1. Make sure you have [Node.js](https://nodejs.org/en) installed.

2. Clone the GitHub repository.

3. Open a command line terminal in the root directory and type in `npm install`.
Allow time for
[npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
to download and install all the required packages.

4. In the command line terminal, type in `npm run dev`. This will start a server
locally on your machine.

5. The app can then be accessed by going to http://localhost:3000 while the CMS
can be found at http://localhost:3000/cms.

NOTE: Hounslow Recycling Hub used AWS for its backend. These services have since
been disabled and the affected code has been removed from the codebase.
Modifications have been made to allow the website to function to a certain
degree without a backend.

## Further Information

The module 7CCSMGPR [Impact
Accelerator](https://www.kcl.ac.uk/informatics/engagement/impact-accelerator)
was a collaborative effort between KCL (King's College London) and AWS (Amazon
Web Services). Throughout the year, students attended AWS-led workshops to gain
insight and knowledge about AWS methodology and technology. The goal was to then
apply this knowledge to a real-world scenario.

Students were split into teams and assigned a public sector organisation to be
their **challenge sponsor**. Each challenge sponsor had a problem that they
believed could be solved using modern technology approaches. It was up to the
teams to communicate with their challenge sponsors and learn what that problem
is, figure out how to solve it and then implement the solution using AWS.
Regular meetings with the challenge sponsors ensured that the teams were on the
right track and that the solutions they were developing were in line with their
sponsor's expectations. 

I was part of the **Black Team**, and our challenge sponsor was the **London
Borough of Hounslow**. Their challenge to us was as follows:

<p align="center"><i>
"Our specific challenge for you relates to a Greener Hounslow as one of our
high-level priorities."
</i></p>

<p align="center"><i>
"The objective is to enhance existing channels of communication to our residents
by the provision of clear, engaging, enhanced (potentially interactive)
promotion and signposting of services available and how to access them with the
objective of increasing resident uptake and minimising misuse of bin types,
fly-tipping etc."
</i></p>

Our solution to this challenge was **Hounslow Recycling Hub**.

For more information about the project, see the included
[report](https://github.com/Meezeus/hounslow-recycling-hub/blob/main/report.pdf)
or [project
video](https://github.com/Meezeus/hounslow-recycling-hub/blob/main/project_video.mp4).

## Contributions

This project was a group effort. The members of the Black Team are listed below
in alphabetical order:

* Kacper Dudzinski (me)
* Haoxuan Feng
* Ai Jian
* Mirela Manoleva
* Fatlir Topalli
* Zihao You

## Gallery

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-1.png?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-2.png?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-3.jpg?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-4.png?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-5.jpg?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-6.jpg?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-7.jpg?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-8.jpg?raw=true)

![](https://github.com/Meezeus/hounslow-recycling-hub/blob/3ea949190c5e879967d55868434f16afd85865a0/gallery/image-9.jpg?raw=true)
