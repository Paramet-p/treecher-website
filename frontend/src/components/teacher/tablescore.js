import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData( 1, "กมลชนก", "ชูชื่น", 99),
  createData( 2, "ฉัตรชัย","จันทร์แก้ว", 95),
  createData( 3, "ธนภัทร์", "เพ็ชร์ดวงจันทร์", 87),
  createData( 4, "ธนวรรณ", "แซ่เจียง", 87),
  createData( 5, "นูรียะห์", "หะยีเจะโซะ", 85),
  createData( 6, "บูรฮันนูรดิน", "สะอง", 80),
];

export default function Table_score() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "85%" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit", fontSize: 20, borderColor: "#00443b" ,background: "#5DBB63" } }} >
            <TableCell align="center">ลำดับ</TableCell>
            <TableCell align="left">ชื่อ</TableCell>
            <TableCell align="left">สกุล</TableCell>
            <TableCell align="center">คะแนน</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit" , fontSize: 16, borderColor: "#00443b", background: "#B2D3C2"}}} >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit", fontSize: 16, borderColor: "#00443b", background: "#B2D3C2" } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}