-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2019 at 02:35 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

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
  `selected` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `inno_id` int(11) NOT NULL,
  `img_path` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(3, 'ITER , BBSR'),
(4, 'Aryan institute of engineering and technology'),
(5, 'Attabira Degree College'),
(6, 'Autonomous college '),
(7, 'Bhubaneswar college of engineering '),
(8, 'Biju Pattnaik College of Science and Education, Bhubneswar'),
(9, 'Birla Global University'),
(10, 'BIRLA INSTITUTE OF TECHNOLOGY, MESRA, RANCHI'),
(11, 'BITS Pilani'),
(12, 'BJB Autonomous College'),
(13, 'Buxi Jagabandhu Bidyadhar Autonomous College'),
(14, 'C,V,Raman College of Engineering'),
(15, 'Capital institute of management and science'),
(16, 'Central Institution of Plastic Engineering and Technology'),
(17, 'Central Tool Room And Training Centre'),
(18, 'Centurion University '),
(19, 'Charles Babbage College of Information Technology'),
(20, 'Christ College'),
(21, 'College of Basic Science, Bhubaneswar '),
(22, 'College of Engineering and Technology, Bhubaneswar'),
(23, 'D.R.I.E.M.S'),
(24, 'Dalmia college'),
(25, 'DAMITS'),
(26, 'DAV School of Business Management'),
(27, 'Deepika English Medium School'),
(28, 'Delhi Technological University'),
(29, 'DEMS'),
(30, 'Doranda college'),
(31, 'Dr, Ambedkar Memorial Institute of Information Technology and Management Science'),
(33, 'FIITJEE Junior College'),
(34, 'G,M University , Sambalpur'),
(35, 'Gandhi Engineering College'),
(36, 'Gandhi Institute for Technological Advancement'),
(37, 'Gandhi Institute for Technology ( GIFT )'),
(38, 'Gandhi Institute of Engineering and Technology (Autonomous), Gunupur'),
(39, 'Gandhi institute of excellent technocrats'),
(40, 'Gangadhar Meher University'),
(41, 'Ggv koni bilaspur (C,G)'),
(42, 'GITAM university'),
(43, 'Government Autonomous College,Angul'),
(44, 'Government College of Engineering and Ceramic Technology , Kolkata'),
(45, 'Government College Of Engineering Kalahandi, Bhawanipatna'),
(46, 'Government College of Engineering KEONJHAR'),
(47, 'Government college,sundargarh'),
(48, 'Government Degree college Sundargarh'),
(49, 'Great Lakes Institute of Management, Gurgaon'),
(50, 'Heritage Institute of Technology'),
(51, 'Hitech Medical College And Hospital ROURKELA '),
(52, 'IIEST'),
(53, 'IILM Graduate school of management, Noida'),
(54, 'IIM Sirmaur'),
(55, 'Indian Institute of Management'),
(56, 'Indira Gandhi Institute of Technology'),
(57, 'INDIRA GANDHI NATIONAL OPEN UNIVERSITY'),
(58, 'Indira Gandhi Women\'s College'),
(59, 'Industrial Training Institute'),
(60, 'Institute of Rural Management Anand'),
(61, 'INSTITUTE OF TECHNOLOGY ,Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh '),
(62, 'INSTITUTE OF TECNOLOGY, GURU GHASIDAS UNIVERSITY'),
(63, 'International Institiute of Information and Technology'),
(64, 'ITER , Bhubaneswar'),
(65, 'IT-GGU, BILASPUR'),
(66, 'Jupiter  degree college Gangapada '),
(67, 'Kalam Institute of Technology'),
(68, 'Khallikote University, Berhampur'),
(69, 'KIIT University, Bhubaneswar'),
(70, 'Kmbb engineering and technology'),
(71, 'M.K.C.G Medical College, Berhampur'),
(72, 'Maharshi College Of Natural Law,BBSR'),
(73, 'MIT college, Kothrud pune'),
(74, 'Municipal college,Rourkela'),
(75, 'MVGR COLLEGE OF ENGINEERING'),
(76, 'National Institue of Science and Technology, Berhampur'),
(77, 'NATIONAL INSTITUTE OF TECHNOLOGY, ROURKELA'),
(78, 'NIFT'),
(79, 'NIRMA UNIVERSITY'),
(80, 'NISER'),
(81, 'Odisha engineering college'),
(82, 'OUAT'),
(83, 'Oxford College of Engineering and Technology'),
(84, 'Padmanava College of Engineering'),
(85, 'Piloo Modi College of Architecture '),
(86, 'PMEC'),
(87, 'Purushottam Institute of Engineering and technology'),
(88, 'Rajdhani engineering college'),
(89, 'RANCHI UNIVERSITY'),
(90, 'Ravenshaw University'),
(91, 'RCC Institute of Information Technology'),
(92, 'Regional college of management'),
(93, 'Resonance, Bhubaneswar'),
(94, 'Roland Institute Of Technology'),
(95, 'Roukela Institute Of Management Studies'),
(96, 'Rourkela Institute Of Technology'),
(97, 'S.G Womens College , Rourkela'),
(98, 'Sahyadri College of Engineering and Management'),
(99, 'Sai College of Commerce'),
(100, 'Sai International College of Commerce and Economics'),
(101, 'SAMBALPUR UNIVERSITY INSTITUTE OF INFORMATION AND TECHNOLOGY'),
(102, 'Sambalpur University Institute of Information Technology'),
(103, 'SCB Medical College'),
(104, 'SCIENCE COLLEGE (AUTONOMOUS), HINJILICUT, GANJAM'),
(105, 'SHASHKIYA KAKTIYA SNATAKOTTAR MAHAVIDLAYA'),
(106, 'Shri Shikshayatan College '),
(107, 'Silicon Institute of Technology'),
(108, 'SOA UNIVERSITY (IBCS) '),
(109, 'SRM UNIVERSITY'),
(110, 'St, Paul\'s School'),
(111, 'St, Xavier\'s College, Kolkata '),
(112, 'Suddhananda Engineering and Research Centre'),
(113, 'SUIIT'),
(114, 'Sukrabehera Degree College,Nayagarh'),
(115, 'Symbiosis School Of Economics'),
(116, 'SYNERGY INSTITUTE OF ENGINEERING AND TECHNOLOGY'),
(117, 'The Bhawanipur Education Society College'),
(118, 'The Law College'),
(119, 'Trident Academy of Technology'),
(120, 'Udyanatha autonomous college of science and technology'),
(121, 'University College Of Engineering And Technology'),
(122, 'University Law College'),
(123, 'Utkal law University'),
(124, 'Utkal Sangeet Mahavidyalaya,BBSR'),
(125, 'Utkal University'),
(126, 'V R SIDDHARDHA COLLEGE OF ENGG'),
(127, 'V.N. AUTONOMOUS COLLEGE, JAJPUR ROAD'),
(128, 'VEER SURENDRA SAI UNIVERSITY OF TECHNOLOGY,BURLA'),
(129, 'Vellore Institute of Technology'),
(130, 'Vignan institute of technology and management, golanthara'),
(131, 'Vikash Degree College'),
(132, 'Vikash Institute of Technology'),
(133, 'Welingkar Institute of Management Development and Research'),
(134, 'Women college , Sambalpur'),
(135, 'Xavier University'),
(139, 'Stewart Science College'),
(140, 'RIT'),
(141, 'RIT'),
(142, 'SOA NATIONAL INSTITUTE OF LAW'),
(143, 'SOA NATIONAL INSTITUTE OF LAW'),
(144, 'SOA NATIONAL INSTITUTE OF LAW'),
(145, 'SOA NATIONAL INSTITUTE OF LAW'),
(146, 'SOA NATIONAL INSTITUTE OF LAW'),
(147, 'SOA NATIONAL INSTITUTE OF LAW'),
(148, 'Ispat Outonomous College Rourkela '),
(149, 'NITR'),
(150, 'Andhra university college of engineering(autonomous) '),
(151, 'Veer surendra sai institute of technology'),
(152, 'Govt. Science College Chatrapur'),
(153, 'Collage of engineering Bhubaneswar'),
(154, 'Collage of engineering Bhubaneswar'),
(155, 'Ganesh Institute of Engineering And Technology '),
(156, 'Dibrugarh University'),
(157, 'Indian institute of petroleum and energy '),
(158, 'Indian institute of petroleum and energy'),
(159, 'Indian Institute of Technology Bhubaneswar '),
(160, 'SOA NATIONAL INSTITUTE OF LAW'),
(161, 'Kanak manjari institute of pharmaceutical sciences'),
(162, 'Ganesh Institute of Engineering and Technology, bhubaneswar '),
(163, 'Indian Institue Of Production Management (IIPM)'),
(164, 'Central tool room and training centre'),
(165, 'Delhi Public School, Rourkela'),
(166, 'AJAY BINAY INSTITUTE OF TECHNOLOGY'),
(167, 'St.Joseph Convent School Rourkela'),
(168, 'St.Joseph Convent School Rourkela'),
(169, 'NIIS COLLEGE OF BUISNESS ADMINISTRATION'),
(170, 'Carmel school'),
(171, 'Carmel school'),
(172, 'DELHI PUBLIC SCHOOL');

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
  `date1` tinytext NOT NULL,
  `time1` tinytext NOT NULL,
  `category` mediumtext NOT NULL,
  `coordinatorName1` tinytext NOT NULL,
  `coordinatorContact1` text NOT NULL,
  `coordinatorName2` tinytext NOT NULL,
  `coordinatorContact2` text NOT NULL,
  `loginId` varchar(20) DEFAULT NULL,
  `loginPassword` mediumtext DEFAULT NULL,
  `winner1` mediumtext DEFAULT NULL,
  `winner2` mediumtext DEFAULT NULL,
  `image_path` mediumtext DEFAULT NULL,
  `max_limit` int(11) NOT NULL DEFAULT -1,
  `filled` int(11) NOT NULL DEFAULT 0,
  `results_submitted` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events_registration`
--

CREATE TABLE `events_registration` (
  `inno_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `checkInStatus` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `special_event`
--

CREATE TABLE `special_event` (
  `event_id` int(11) NOT NULL,
  `inno_id` int(11) NOT NULL,
  `details` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `college` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0,
  `checked_in` int(11) NOT NULL DEFAULT 0,
  `user_password` varchar(100) NOT NULL,
  `ca_id` int(11) NOT NULL DEFAULT 0,
  `payment_response` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `ca_response` int(11) NOT NULL,
  `reset_init` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `inno_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
