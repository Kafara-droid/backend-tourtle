const { db, auth } = require('../config/firebase');

class DestinasiController {
  createDestinasi(req, res) {
    const { name, description, location } = req.body;

    if (!name || !description || !location) {
      return res.status(422).json({
        name: !name ? "Name is required" : undefined,
        description: !description ? "Description is required" : undefined,
        location: !location ? "Location is required" : undefined,
      });
    }

    const newDestinasi = {
      name,
      description,
      location,
      createdAt: new Date().toISOString(),
      createdBy: auth.currentUser.uid,
    };

    db.collection("destinations")
      .add(newDestinasi)
      .then((docRef) => {
        res.status(201).json({ message: "Destination created successfully", id: docRef.id });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        res.status(500).json({ error: "An error occurred while creating the destination" });
      });
  }

  getDestinasi(req, res) {
    const { id } = req.params;

    db.collection("destinations")
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: "Destination not found" });
        }
        res.status(200).json(doc.data());
      })
      .catch((error) => {
        console.error("Error getting document: ", error);
        res.status(500).json({ error: "An error occurred while fetching the destination" });
      });
  }

  getAllDestinasi(req, res) {
    db.collection("destinations")
      .get()
      .then((snapshot) => {
        const destinations = [];
        snapshot.forEach((doc) => {
          destinations.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json(destinations);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
        res.status(500).json({ error: "An error occurred while fetching the destinations" });
      });
  }

  updateDestinasi(req, res) {
    const { id } = req.params;
    const { name, description, location } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (location) updateData.location = location;

    db.collection("destinations")
      .doc(id)
      .update(updateData)
      .then(() => {
        res.status(200).json({ message: "Destination updated successfully" });
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        res.status(500).json({ error: "An error occurred while updating the destination" });
      });
  }

  deleteDestinasi(req, res) {
    const { id } = req.params;

    db.collection("destinations")
      .doc(id)
      .delete()
      .then(() => {
        res.status(200).json({ message: "Destination deleted successfully" });
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        res.status(500).json({ error: "An error occurred while deleting the destination" });
      });
  }
}

module.exports = new DestinasiController();
