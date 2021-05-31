const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const testArr = {};
  testArr.push('code smell section');
  const result = {};
  result.empId = 'EMP-123';
  result.empName = 'John';
  res.status(200).json({ success: true, data: result });
});

module.exports = router;

