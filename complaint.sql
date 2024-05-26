-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2021 at 06:45 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `complaint`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
`user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `place` varchar(1000) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_id`, `name`, `email`, `password`, `mobile`, `place`, `created_date`) VALUES
(2, 'Admin', 'admin@gmail.com', 'test', '09790675343', '', '2021-01-19');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
`cus_id` int(255) NOT NULL,
  `field_15` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_16` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_6` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_8` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_9` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_10` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_11` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_12` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_13` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_14` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`cus_id`, `field_15`, `field_16`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `field_10`, `field_11`, `field_12`, `field_13`, `field_14`, `created_date`) VALUES
(20, '', '', 'user@gmail.com', 'Panneer', 'Nehru', '156', 'Vatti Pillayar Road', 'Kumbakonam', 'Water', 'Water Service Problem', 'High', 'Rejected', 'asfs', 'dasff', '', '', '', '2021-01-30'),
(23, '', '', 'user@gmail.com', 'Panneer Selvam', 'Safe home', '123', 'Kumbakonam', 'Pondi', 'Water', 'Water Service not recieving', 'Nil', 'Completed', 'Mun Water service stopped', 'Will be fixed in 4 hours', '', '', '', '2021-02-22'),
(24, '', '', 'user@gmail.com', 'Panneer', 'vasan Hosp', '4956', '504 - Vinayar Road', 'Chennai', 'Water', 'Water Not coming for last 2 days', 'Nil', 'Completed', 'Lack of water', 'Nil', '', '', '', '2021-04-16'),
(25, '', '', 'user@gmail.com', 'Ram', 'hosp', '150', 'Anna Nagar, chennai', 'Chennai', 'Water', 'Water Not coming', 'Nil', 'Completed', 'Nil', 'Nil', '', 'http://localhost/projects/complaint/web/uploads/800px_COLOURBOX18795417.jpg', '', '2021-06-07'),
(26, '', '', 'priya@gmail.com', 'Priya', 'Kumbakonam', '124 Vatti Pillayar Main Road', 'Near Agarwal Hosp', 'Thanjavur', 'Water', 'Water not coming for 2 days', 'Contact 9790675343', 'Completed', 'Reason', 'Solution', '', '', '', '2021-03-17'),
(27, '', '', 'user@gmail.com', 'Dharani', 'Kumberswarar Temple', 'Kumbakonam', 'Kumbakonam', 'Trichy', 'Street', 'Street Light Not working for 2 days', 'High', 'Pending', '', '', '', 'http://localhost/projects/complaint/web/uploads/1.JPG', 'http://localhost/projects/complaint/web/uploads/1.JPG', '2021-01-29'),
(28, '13.085742137366319', '80.28436547946787', 'user@gmail.com', 'Dharani', 'Kumberswarar Temple', 'Chennai', 'Chennai', 'Chennai', 'Street', 'Street Light Not working for 2 days', 'High', 'Pending', '', '', '', 'http://localhost/projects/complaint/web/uploads/1.JPG', 'http://localhost/projects/complaint/web/uploads/1 (2).jpg', '2021-01-29'),
(29, '', '', 'dharani1@gmail.com', 'Dharani', 'Kumb', '123 Kumbakonam', 'Kumbakonam', 'Chennai', 'Street', 'Light is not working', 'Low', 'Completed', 'Due to rain', 'its solved', 'nil', 'http://localhost/projects/complaint/web/uploads/1.JPG', 'http://localhost/projects/complaint/web/uploads/1 (2).jpg', '2021-01-29');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `created_date` date NOT NULL,
`feedback_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`created_date`, `feedback_id`, `email`, `field_1`, `field_2`) VALUES
('2021-02-05', 1, 'user@gmail.com', 'sf', 'dsfdsfa'),
('2021-02-23', 2, 'user@gmail.com', 'test', 'testes'),
('2021-03-17', 3, 'user@gmail.com', 'test', 'test'),
('2021-01-29', 4, 'dharani1@gmail.com', 'Dharani', 'Thanks for the quick work');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
`user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `created_date`) VALUES
(2, 'Panneer Selvam', 'user@gmail.com', 'test', '1234567890', 'Kumbakonam', 'Thanjavur', 'whitey', 'bala', '2021-01-19'),
(3, 'Panneer', 'panneer@gmail.com', 'test', '987987987', 'Chennai', 'Chennai', 'dog', 'ram', '2021-04-16'),
(4, 'priya', 'priya@gmail.com', 'test', '1234512345', 'Kumbakonam', 'Kumbakonam', 'test', 'test', '2021-03-17'),
(5, 'dharani', 'dharani1@gmail.com', 'test', '1234567890', 'kum', 'kum', 'test', 'test', '2021-01-29'),
(6, 'test', 'test@gmail.com', 'test', '1234567890', 'test', 'test', 'test', 'test', '2021-04-06'),
(7, 'test', 'test123@gmail.com', 'test', '1234567892', 'test', 'test', 'test', 'test', '2021-02-12'),
(8, 'test', 'test@gmail.com', 'test', '1234567890', 'test', 'test', 'test', 'test', '2021-04-11');

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE IF NOT EXISTS `site` (
`cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`cus_id`, `email`, `field_1`, `created_date`) VALUES
(50, '', 'Bangalore', '2021-03-12'),
(51, '', 'Delhi', '2021-03-12'),
(55, '', 'Chennai', '2021-11-11'),
(56, '', 'Pondi', '2021-11-11'),
(57, '', 'Thanjavur', '2021-11-11'),
(58, '', 'Kumbakonam', '2021-11-11'),
(59, '', 'Karaikal', '2021-11-11'),
(60, '', 'guntur', '2021-11-11'),
(61, '', 'vijayawada', '2021-11-11'),
(62, '', 'ongole', '2021-11-11'),
(63, '', 'vizag', '2021-11-11'),
(64, '', 'nellore', '2021-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `staff_login`
--

CREATE TABLE IF NOT EXISTS `staff_login` (
`user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `place` varchar(1000) COLLATE utf8_bin NOT NULL,
  `dept` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `staff_login`
--

INSERT INTO `staff_login` (`user_id`, `name`, `email`, `password`, `mobile`, `place`, `dept`, `created_date`) VALUES
(2, 'Admin', 'pwduser@gmail.com', 'test', '09790675343', '', '', '2021-01-19'),
(4, 'Ram', 'pwd2@gmail.com', 'test', '97987987', 'Pondi', '', '2021-04-16'),
(5, 'Kumar', 'pwd3@gmail.com', 'test', '987987987', 'Pondi', 'Water', '2021-04-16'),
(6, 'Arun', 'pwd4@gmail.com', 'test', '987987987987', 'Chennai', 'Water', '2021-04-16'),
(7, 'Arun', 'pwd10@gmail.com', 'test', '1234567890', 'Chennai', '', '2021-06-07'),
(8, 'priya', 'priya@gmail.com', 'test', '1234512345', 'Thanjavur', '', '2021-03-17'),
(9, 'dharani', 'dharani@gmail.com', 'test', '1234567980', 'Chennai', 'Street', '2021-01-29'),
(10, 'Arun', 'rto@gmail.com', 'test', '1234567890', 'RTO Officier', 'RTO', '2021-03-13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
 ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `site`
--
ALTER TABLE `site`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `staff_login`
--
ALTER TABLE `staff_login`
 ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
MODIFY `feedback_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `site`
--
ALTER TABLE `site`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT for table `staff_login`
--
ALTER TABLE `staff_login`
MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
