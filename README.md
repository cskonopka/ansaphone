<p align="center">
  <img width="35%" height="35%" src="https://github.com/cskonopka/ansaphone/blob/master/img/ansaphone-logo.png?raw=true"/>
</p> 



<p align="center"><em>Ansaphone is a system where attendees can call-in, leave a voicemail, and download the audio files to a local machine using FFMPEG and Node within Max. The files are pooled and accessible via audio samplers within Max to create an event collage.</em></p>

# Requirements
- Twilio account
- MaxMSP
- FFmpeg

# Overview
- Scrape a Twilio account for recorded calls
- Rip the calls with FFMPEG
- Populate an audio sampler in MaxMSP
