-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2018 at 12:07 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

DROP TABLE IF EXISTS `ca_selection_questions`;
CREATE TABLE IF NOT EXISTS `ca_selection_questions` (
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
('q10', 'How many students do you think you can convince into bringing to Innovision this year? What''s your strategy to promote Innovision?'),
('q11', 'Social Media platforms that you are active on?'),
('q12', 'Languages that you are fluent in'),
('q13', 'What makes you unique from others?');

-- --------------------------------------------------------

--
-- Table structure for table `ca_selection_responses`
--

DROP TABLE IF EXISTS `ca_selection_responses`;
CREATE TABLE IF NOT EXISTS `ca_selection_responses` (
  `ca_applicant_id` int(11) NOT NULL AUTO_INCREMENT,
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
  `selected` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ca_applicant_id`),
  UNIQUE KEY `q2` (`q2`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ca_selection_responses`
--

INSERT INTO `ca_selection_responses` (`ca_applicant_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `q8`, `q9`, `q10`, `q11`, `q12`, `q13`, `selected`) VALUES
(1, 'Sudha', 'ugsbjn', 'TGVUBAJF', 'ATFGUYDHAF', 'fcvhvbjb gd', 'yfchgvjjb', 'tfcghvgj mn jhbhhkbk', 'hfchgjhjbk shdbhbjgbjc j', 'fgchgvbhjvgshbjd', 'fcfhvjbkjvgvjgv', 'hfchv', 'hfdyhg n', 'gdgchvh', 0),
(2, 'gfdcyhjb', 'yrfyhj', 'hfvj', 'ffyvyhjb', 'ytfguj', 'yrtfyv', 'ytfgyuj', 'gfghgjb', 'gch gb', 'fcgcb', 'rgfhcvh', 'rfdcgh', 'gdfxcgh', 0),
(3, 'tfcvbj', 'dcgvh', 'tfgvbujk', 'dfygbuj', 'dcvyh', 'tedfcyv', 'retcvy', 'rzxtcg', 'ttdxctyh', 'tdctvyh', 'dxtc', 'trdfy', 'gfcvh', 0);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
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
  `filled` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

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

DROP TABLE IF EXISTS `events_registration`;
CREATE TABLE IF NOT EXISTS `events_registration` (
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
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `inno_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `gender` text NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `college` varchar(100) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT '0',
  `checked_in` int(11) NOT NULL DEFAULT '0',
  `user_password` varchar(100) NOT NULL,
  `qr_code` varchar(100) NOT NULL,
  PRIMARY KEY (`inno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`inno_id`, `name`, `gender`, `phone`, `email`, `college`, `paid`, `checked_in`, `user_password`, `qr_code`) VALUES
(1, 'John', '', 2147483647, 'meJohn@gmail.com', 'abcd', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/meJohn@gmail.com.png'),
(2, 'Peter', '', 2147483647, 'contactPeter@gmail.com', 'nit', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png'),
(3, 'Peter', '', 2147483647, 'contactPeter@gmail.com', 'nit', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png'),
(4, 'Peter', '', 2147483647, 'contactPeter@gmail.com', 'nit', 0, 0, '17765d0e02d3455a5ae299e7091e9217', '../qrcodes/contactPeter@gmail.com.png');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
