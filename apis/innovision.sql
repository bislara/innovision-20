-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2019 at 04:42 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `innovision`
--

-- --------------------------------------------------------

--
-- Table structure for table `ca_selection_questions`
--

CREATE TABLE `ca_selection_questions` (
  `question_id` varchar(3) NOT NULL,
  `question` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ca_selection_questions`
--

INSERT INTO `ca_selection_questions` (`question_id`, `question`) VALUES
('q1', 'Name'),
('q2', 'E-mail'),
('q3', 'Contact'),
('q4', 'Institution'),
('q5', 'Course'),
('q6', 'Year of study'),
('q7', 'Positions of responsibility held in college'),
('q8', 'Have you ever been to Innovision earlier? When?'),
('q9', 'Write in brief about what you know about Innovision.'),
('q10', 'How many students do you think you can convince into bringing to Innovision this year? What\'s your strategy to promote Innovision?'),
('q11', 'Social Media platforms that you are active on?'),
('q12', 'Languages that you are fluent in'),
('q13', 'What makes you unique from others?');

-- --------------------------------------------------------

--
-- Table structure for table `ca_selection_responses`
--

CREATE TABLE `ca_selection_responses` (
  `ca_applicant_id` int(11) NOT NULL,
  `q1` tinytext NOT NULL,
  `q2` varchar(50) NOT NULL,
  `q3` varchar(11) NOT NULL,
  `q4` tinytext NOT NULL,
  `q5` tinytext NOT NULL,
  `q6` varchar(10) NOT NULL,
  `q7` mediumtext NOT NULL,
  `q8` mediumtext NOT NULL,
  `q9` mediumtext NOT NULL,
  `q10` mediumtext NOT NULL,
  `q11` mediumtext NOT NULL,
  `q12` mediumtext NOT NULL,
  `q13` mediumtext NOT NULL,
  `selected` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ca_selection_responses`
--

INSERT INTO `ca_selection_responses` (`ca_applicant_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `q8`, `q9`, `q10`, `q11`, `q12`, `q13`, `selected`) VALUES
(1, 'Sudha', 'ugsbjn', 'TGVUBAJF', 'ATFGUYDHAF', 'fcvhvbjb gd', 'yfchgvjjb', 'tfcghvgj mn jhbhhkbk', 'hfchgjhjbk shdbhbjgbjc j', 'fgchgvbhjvgshbjd', 'fcfhvjbkjvgvjgv', 'hfchv', 'hfdyhg n', 'gdgchvh', 0),
(2, 'gfdcyhjb', 'yrfyhj', 'hfvj', 'ffyvyhjb', 'ytfguj', 'yrtfyv', 'ytfgyuj', 'gfghgjb', 'gch gb', 'fcgcb', 'rgfhcvh', 'rfdcgh', 'gdfxcgh', 0),
(3, 'tfcvbj', 'dcgvh', 'tfgvbujk', 'dfygbuj', 'dcvyh', 'tedfcyv', 'retcvy', 'rzxtcg', 'ttdxctyh', 'tdctvyh', 'dxtc', 'trdfy', 'gfcvh', 0);

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` int(11) NOT NULL,
  `college_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `college_name`) VALUES
(1, 'VSSUT, Burla'),
(2, 'CET , Bhubaneswar'),
(3, 'ITER , BBSR');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eid` int(11) NOT NULL,
  `title` mediumtext NOT NULL,
  `description` longtext NOT NULL,
  `rules` longtext NOT NULL,
  `judging_criteria` longtext NOT NULL,
  `date` tinytext NOT NULL,
  `venue` mediumtext NOT NULL,
  `time` tinytext NOT NULL,
  `category` mediumtext NOT NULL,
  `coordinatorName1` tinytext NOT NULL,
  `coordinatorContact1` text NOT NULL,
  `coordinatorName2` tinytext NOT NULL,
  `coordinatorContact2` text NOT NULL,
  `loginId` varchar(20) DEFAULT NULL,
  `loginPassword` mediumtext,
  `winner1` mediumtext,
  `winner2` mediumtext,
  `image_path` mediumtext,
  `max_par` int(11) NOT NULL,
  `filled` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eid`, `title`, `description`, `rules`, `judging_criteria`, `date`, `venue`, `time`, `category`, `coordinatorName1`, `coordinatorContact1`, `coordinatorName2`, `coordinatorContact2`, `loginId`, `loginPassword`, `winner1`, `winner2`, `image_path`, `max_par`, `filled`) VALUES
(1, 'event1', 'uwudwwnj', 'dewee', 'gerggeegegege', '12/11/2018', 'rm hall', '12:00 AM', 'abcd', 'Mr. AAAAA', '9856321470', 'Mr. BBBB', '8547963210', 'abc@gmail.com', '123', 'PPPP', 'QQQQQQ', '../images/event1.jpeg', 0, 0),
(2, 'event2', 'cvbnm', 'fadhadgadhgad', 'dgygdugdgwyf', '3/11/2018', 'la lawns', '1:00 PM', 'qwerty', 'mr. FFFFF', '7854129630', 'mr. GGGGG', '7789654123', 'pqr@gmail.com', '123', 'Mr.QQQQ', 'Mr.WWWW', '../images/event2.jpeg', 0, 0),
(3, 'uohen', 'htgbuj', 'jyhbj', 'hfgcvjl', 'jghbj', 'trfcvtgv', 'yrfgu', 'ytywagbfja', 'yshbedf', 'tzsgvb ', 'utftyg', 'utfvbjhm', NULL, NULL, NULL, NULL, NULL, 1, 0),
(26, 'trdfugikhuhk', 'd57tfghijo', 'yrfguyhn ', 'trxdctubujml', 'yrfutiu', 'rdfughi', 'ytfuyhoj', 'yrfugin', 'trdfyug', 'tedsdryuy', 'rfdcftvbj', 'fgyuhio', NULL, NULL, NULL, NULL, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `events_registration`
--

CREATE TABLE `events_registration` (
  `inno_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events_registration`
--

INSERT INTO `events_registration` (`inno_id`, `event_id`) VALUES
(1, 3),
(1, 2),
(2, 1),
(2, 3),
(2, 2),
(51, 1),
(51, 2),
(51, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `inno_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` text NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(500) NOT NULL DEFAULT '0',
  `college` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT '0',
  `checked_in` int(11) NOT NULL DEFAULT '0',
  `user_password` varchar(100) NOT NULL,
  `qr_code` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`inno_id`, `name`, `gender`, `phone`, `email`, `token`, `college`, `address`, `paid`, `checked_in`, `user_password`, `qr_code`) VALUES
(1, 'John', '', '2147483647', 'meJohn@gmail.com', '0', 'abcd', '', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/meJohn@gmail.com.png'),
(2, 'Peter', '', '2147483647', 'contactPeter@gmail.com', '0', 'nit', '', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png'),
(3, 'Peter', '', '2147483647', 'contactPeter@gmail.com', '0', 'nit', '', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png'),
(4, 'Peter', '', '2147483647', 'contactPeter@gmail.com', '0', 'nit', '', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png'),
(51, 'Neelam', 'female', '8280030272', 'neelammahapatro36@gmail.com', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NjYzMzA2NDQsImp0aSI6IlRtVmxiR0Z0IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9pbm5vXC8iLCJuYmYiOjE1NjYzMzA2NDQsImV4cCI6MTU2NjMzMTI0NCwiZGF0YSI6eyJpbm5vX2lkIjoiNTEiLCJlbWFpbCI6Im5lZWxhbW1haGFwYXRybzM2QGdtYWlsLmNvbSJ9fQ.85hcHnJxGYxG2KPUXHySNrNndXcC9IE6Ca8bKiGysfidp7L8I6TKGKZIHi9UDJjFExKJwII6_WqM55iBd3t-Xg', 'VSSUT, Burla', 'CVR Hall, NIT Rourkela, Sector 1, Rourkela', 0, 0, '5f4dcc3b5aa765d61d8327deb882cf99', '../../assets/images/qrcodes/51.png'),
(52, 'Neelam', 'female', '8280030272', 'neelammahapatro361@gmail.com', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NjY1NTQ2MjAsImp0aSI6IlRtVmxiR0Z0IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9pbm5vXC8iLCJuYmYiOjE1NjY1NTQ2MjAsImV4cCI6MTU2NjU1NTIyMCwiZGF0YSI6eyJpbm5vX2lkIjoiNTIiLCJlbWFpbCI6Im5lZWxhbW1haGFwYXRybzM2MUBnbWFpbC5jb20ifX0.RPWQwtG1f-yeh1uWRVaggZeFjkJNIsIixqK_Fo3QIRKyJP1z7_CzOpA6AtTC5xvt-8i01sb_LN0oSv1EoRChDQ', 'VSSUT, Burla', 'CVR Hall, NIT Rourkela, Sector 1, Rourkela', 0, 0, '5f4dcc3b5aa765d61d8327deb882cf99', '../../assets/images/qrcodes/52.png'),
(64, 'Neelam', 'female', '8280030272', 'neelammahapatro362@gmail.com', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NjY1NjU1ODIsImp0aSI6IlRtVmxiR0Z0IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9pbm5vXC8iLCJuYmYiOjE1NjY1NjU1ODIsImV4cCI6MTU2NjU2OTE4MiwiZGF0YSI6eyJpbm5vX2lkIjoiNjQiLCJlbWFpbCI6Im5lZWxhbW1haGFwYXRybzM2MkBnbWFpbC5jb20ifX0.7Ji2if_SCo2nTYlP6qOF_k4ZfQx4TzypI-4fEf-I8lfmw5W0e7EMCeNkVbTDSQ1O0--7ug6rcugtDzNwiHElBw', 'VSSUT, Burla', 'CVR Hall, NIT Rourkela, Sector 1, Rourkela', 0, 0, '5f4dcc3b5aa765d61d8327deb882cf99', '../../../assets/images/qrcodes/64.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ca_selection_responses`
--
ALTER TABLE `ca_selection_responses`
  ADD PRIMARY KEY (`ca_applicant_id`),
  ADD UNIQUE KEY `q2` (`q2`);

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`inno_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ca_selection_responses`
--
ALTER TABLE `ca_selection_responses`
  MODIFY `ca_applicant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `inno_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
