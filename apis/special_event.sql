-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2019 at 06:33 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

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
-- Table structure for table `special_event`
--

CREATE TABLE `special_event` (
  `event_id` int(11) NOT NULL,
  `inno_id` int(11) NOT NULL,
  `details` varchar(255) NOT NULL,
  `awalk` int(11) NOT NULL DEFAULT '0',
  `clavimate` int(11) NOT NULL DEFAULT '0',
  `etrix` int(11) NOT NULL DEFAULT '0',
  `fastech` int(11) NOT NULL DEFAULT '0',
  `frapp` int(11) NOT NULL DEFAULT '0',
  `phoenix` int(11) NOT NULL DEFAULT '0',
  `estino` int(11) NOT NULL DEFAULT '0',
  `ikshate` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `special_event`
--

INSERT INTO `special_event` (`event_id`, `inno_id`, `details`, `awalk`, `clavimate`, `etrix`, `fastech`, `frapp`, `phoenix`, `estino`, `ikshate`) VALUES
(15, 21, 'edtrfytu', 1, 1, 0, 0, 0, 1, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `special_event`
--
ALTER TABLE `special_event`
  ADD PRIMARY KEY (`inno_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
