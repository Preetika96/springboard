-- MySQL dump 10.13  Distrib 5.5.23, for Win64 (x86)
--
-- Host: localhost    Database: springboard
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment_table`
--

DROP TABLE IF EXISTS `assessment_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assessment_table` (
  `empcode` int(10) NOT NULL DEFAULT '0',
  `subject_id` int(10) NOT NULL DEFAULT '0',
  `empname` varchar(50) DEFAULT NULL,
  `percent` int(10) DEFAULT NULL,
  PRIMARY KEY (`empcode`,`subject_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_table`
--

LOCK TABLES `assessment_table` WRITE;
/*!40000 ALTER TABLE `assessment_table` DISABLE KEYS */;
INSERT INTO `assessment_table` VALUES (52501,1,'Jagannath',50),(52502,1,'Jagannath',50),(52503,1,'Jagannath',50),(52504,1,'Jagannath',50),(52505,1,'Jagannath',50),(52506,1,'Jagannath',50),(52507,1,'Jagannath',50),(52508,1,'Jagannath',50),(52509,1,'Jagannath',50),(52510,1,'Jagannath',50),(52511,1,'Jagannath',50),(52512,1,'Jagannath',50),(52513,1,'Jagannath',50),(52514,1,'Jagannath',50),(52515,1,'Jagannath',50),(52516,1,'Jagannath',50),(52517,1,'Jagannath',50),(52518,1,'Jagannath',50),(52519,1,'Jagannath',50),(52520,1,'Jagannath',50),(52521,1,'Jagannath',50),(52522,1,'Jagannath',50),(52523,1,'Jagannath',50),(52524,1,'Jagannath',50),(52525,1,'Jagannath',50),(52526,1,'Jagannath',50),(52527,1,'Jagannath',50),(52528,1,'Jagannath',50),(52529,1,'Jagannath',50),(52530,1,'Jagannath',50),(52531,1,'Jagannath',50),(52532,1,'Jagannath',50),(52533,1,'Jagannath',50),(52534,1,'Jagannath',50),(52535,1,'Jagannath',50),(52536,1,'Jagannath',50),(52537,1,'Jagannath',50),(52538,1,'Jagannath',50),(52539,1,'Jagannath',50),(52540,1,'Jagannath',50),(52541,1,'Jagannath',50),(52542,1,'Jagannath',50),(52543,1,'Jagannath',50),(52544,1,'Jagannath',50),(52545,1,'Jagannath',50),(52546,1,'Jagannath',50),(52547,1,'Jagannath',50),(52548,1,'Jagannath',50),(52549,1,'Jagannath',50),(52550,1,'Jagannath',50),(52551,1,'Jagannath',50),(52552,1,'Jagannath',50),(52553,1,'Jagannath',50),(52554,1,'Jagannath',50),(52555,1,'Jagannath',50),(52556,1,'Jagannath',50),(52557,1,'Jagannath',50),(52558,1,'Jagannath',50),(52559,1,'Jagannath',50),(52560,1,'Jagannath',50),(52561,1,'Jagannath',50),(52562,1,'Jagannath',50),(52563,1,'Jagannath',50),(52564,1,'Jagannath',50),(52565,1,'Jagannath',50),(52566,1,'Jagannath',50),(52567,1,'Jagannath',50),(52568,1,'Jagannath',50),(52569,1,'Jagannath',50),(52570,1,'Jagannath',50),(52571,1,'Jagannath',50),(52572,1,'Jagannath',50),(52573,1,'Jagannath',50),(52574,1,'Jagannath',50),(52575,1,'Jagannath',50),(52576,1,'Jagannath',50),(52577,1,'Jagannath',50),(52578,1,'Jagannath',50),(52579,1,'Jagannath',50),(52580,1,'Jagannath',50),(52581,1,'Jagannath',50),(52582,1,'Jagannath',50),(52583,1,'Jagannath',50),(52584,1,'Jagannath',50),(52585,1,'Jagannath',50),(52586,1,'Jagannath',50),(52587,1,'Jagannath',50),(52588,1,'Jagannath',50),(52589,1,'Jagannath',50),(52590,1,'Jagannath',50),(52591,1,'Jagannath',50),(52592,1,'Jagannath',50),(52593,1,'Jagannath',50),(52594,1,'Jagannath',50),(52595,1,'Jagannath',50),(52596,1,'Jagannath',50),(52597,1,'Jagannath',50),(52598,1,'Jagannath',50),(52599,1,'Jagannath',50),(52600,1,'Jagannath',50),(52601,1,'Jagannath',50),(52602,1,'Jagannath',50),(52603,1,'Jagannath',50),(52604,1,'Jagannath',50),(52605,1,'Jagannath',50),(52606,1,'Jagannath',50),(52607,1,'Jagannath',50),(52608,1,'Jagannath',50),(52609,1,'Jagannath',50),(52610,1,'Jagannath',50),(52611,1,'Jagannath',50),(52612,1,'Jagannath',50),(52613,1,'Jagannath',50),(52614,1,'Jagannath',50),(52615,1,'Jagannath',50),(52616,1,'Jagannath',50),(52617,1,'Jagannath',50),(52618,1,'Jagannath',50),(52619,1,'Jagannath',50),(52620,1,'Jagannath',50),(52621,1,'Jagannath',50),(52622,1,'Jagannath',50),(52623,1,'Jagannath',50),(52624,1,'Jagannath',50),(52625,1,'Jagannath',50),(52626,1,'Jagannath',50),(52627,1,'Jagannath',50),(52628,1,'Jagannath',50),(52629,1,'Jagannath',50),(52630,1,'Jagannath',50),(52631,1,'Jagannath',50),(52632,1,'Jagannath',50),(52633,1,'Jagannath',50),(52634,1,'Jagannath',50),(52635,1,'Jagannath',50),(52636,1,'Jagannath',50),(52637,1,'Jagannath',50);
/*!40000 ALTER TABLE `assessment_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_list`
--

DROP TABLE IF EXISTS `subject_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subject_list` (
  `subject_id` int(10) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(50) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_list`
--

LOCK TABLES `subject_list` WRITE;
/*!40000 ALTER TABLE `subject_list` DISABLE KEYS */;
INSERT INTO `subject_list` VALUES (1,'html',NULL);
/*!40000 ALTER TABLE `subject_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_material`
--

DROP TABLE IF EXISTS `training_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training_material` (
  `subject_id` int(10) DEFAULT NULL,
  `file_path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_material`
--

LOCK TABLES `training_material` WRITE;
/*!40000 ALTER TABLE `training_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `training_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `empcode` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT 'Tell me about yourself'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-18 19:42:25
