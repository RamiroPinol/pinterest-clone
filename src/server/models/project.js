// @flow

import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, maxlength: 160, required: true },
  description: { type: String, required: true },
  projectUrl: { type: String, required: true },
  imgUrl: { type: String, required: true },
  pinnedBy: [],
  dateCreated: { type: Date, default: Date.now },
})

const Project = mongoose.model('Project', ProjectSchema)

export default Project
