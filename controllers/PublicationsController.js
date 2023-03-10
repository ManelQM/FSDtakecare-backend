const models = require("../models/index");

require("dotenv").config();

const createPublication = async (req, res) => {
  try {
    const publication = req.body;
    // console.log(req.user.id)
    const newPublication = await models.Publication.create({
      title: publication.name,
      nickname: publication.nickname,
      text: publication.text,
      userid: publication.userid,
    });
    res.json({
      message: "Created Publication",
      newPublication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateMyPublication = async (req, res) => {
  try {
    const publication = req.body;
    await models.Publication.update(
      {
        title: publication.title,
        text: publication.text,
        fulljourney: publication.fulljourney,
      },
      {
        where: {
          id: publication.id,
        },
      }
    );
    res.json({
      message: "Publication updated!!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const deletePublication = async (req, res) => {
  try {
    const publicationId = req.body.id;
    // const userid = req.params.userid;
    const publication = await models.Publication.findOne({
      where: {
        id: publicationId,
        // userid: userid
      },
    });
    if (publication.id !== req.body.id) {
      //publication.user_id ! == req.auth.id
      res.json({
        message: "Cant delete publication. Not authorized!",
      });
    } else {
      await models.Publication.destroy({
        where: {
          id: publicationId,
        },
      });
      res.json({
        message: "Publication deleted",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getMyPublications = async (req, res) => {
  try {
    let publications = await models.Publication.findAll({
      where: {
        user_id: req.auth.id,
      },
    });
    res.json({
      message: "Here we have all your publications",
      publications,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllPublications = async (req, res) => {
  try {
    const publications = await models.Publication.findAll();
    res.json({ message: "All publications list", publications });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createPublication,
  updateMyPublication,
  deletePublication,
  getMyPublications,
  getAllPublications,
};
