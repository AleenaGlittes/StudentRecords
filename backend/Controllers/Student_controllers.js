const db =require('../db')

//  getting all the datas from the students table

exports.getAllStudents = (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


// creating a student with first name lastname and age

exports.createStudent = (req, res) => {
  const sql = 'INSERT INTO students (`First_Name`, `Last_Name`, `Age`) VALUES (?, ?, ?)';
  const values = [req.body.firstname, req.body.lastname, req.body.age];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// updating the existing student 

exports.updateStudent = (req, res) => {
  const sql = 'UPDATE students SET `First_Name` = ?, `Last_Name` = ?, `Age` = ? WHERE ID = ?';
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.age,
    req.params.id,
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// deleting the student by getting the id

exports.deleteStudent = (req, res) => {
  const sql = 'DELETE FROM students WHERE ID = ?';
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


