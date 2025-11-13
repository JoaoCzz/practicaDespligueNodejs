import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, precio,stock } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO productos (nombre, precio,stock) VALUES (?, ?, ?)",
      [nombre, precio,stock]
    );
    res.status(201).json({ id: rows.insertId, nombre, precio ,stock });
  } catch (error) {
    return res.status(500).json({ message: "Producto no no encontrado" });
  }
};
//Realizado con PATCH
export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio,stock } = req.body;

    const [result] = await pool.query(
      "UPDATE productos SET nombre = IFNULL(?, nombre), precio = IFNULL(?, precio),stock = IFNULL(?, stock) WHERE id = ?",
      [nombre, precio,stock, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Producto no encontrado" });

    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};


export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM productos WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }
};