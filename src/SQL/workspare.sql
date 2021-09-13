/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : workspare

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 13/09/2021 13:09:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blade_student
-- ----------------------------
DROP TABLE IF EXISTS `blade_student`;
CREATE TABLE `blade_student`  (
  `id` bigint(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '000000' COMMENT '租户ID',
  `no` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学号',
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '姓名',
  `sex` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '性别',
  `birthday` datetime NULL DEFAULT NULL COMMENT '出⽣⽇期',
  `create_user` bigint(64) NULL DEFAULT NULL COMMENT '创建⼈',
  `create_dept` bigint(64) NULL DEFAULT NULL COMMENT '创建部⻔',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` bigint(64) NULL DEFAULT NULL COMMENT '修改⼈',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `status` int(2) NULL DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) NULL DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '学⽣表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blade_student
-- ----------------------------

-- ----------------------------
-- Table structure for rotation_chart
-- ----------------------------
DROP TABLE IF EXISTS `rotation_chart`;
CREATE TABLE `rotation_chart`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '主键',
  `image_url` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片地址',
  `background_color` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '背景色',
  `item_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品id',
  `cat_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品分类id',
  `type` int(11) NOT NULL COMMENT '轮播图类型，用于判断，可以根据商品id或者分类进行',
  `sort` int(11) NOT NULL COMMENT '轮播图展示顺序，从小到大',
  `is_show` int(11) NOT NULL COMMENT '是否展示，1:展示  0:不展示',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rotation_chart
-- ----------------------------

-- ----------------------------
-- Table structure for tb_brand
-- ----------------------------
DROP TABLE IF EXISTS `tb_brand`;
CREATE TABLE `tb_brand`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '品牌id',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '品牌名称',
  `image` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '品牌图片地址',
  `letter` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '品牌的首字母',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 325403 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '品牌表，一个品牌下有多个商品（spu），一对多关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_brand
-- ----------------------------

-- ----------------------------
-- Table structure for tb_category
-- ----------------------------
DROP TABLE IF EXISTS `tb_category`;
CREATE TABLE `tb_category`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '类目id',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '类目名称',
  `parent_id` bigint(20) NOT NULL COMMENT '父类目id,顶级类目填0',
  `is_parent` tinyint(1) NOT NULL COMMENT '是否为父节点，0为否，1为是',
  `sort` tinyint(2) NOT NULL COMMENT '排序指数，越小越靠前',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '数据创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '数据更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `key_parent_id`(`parent_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1424 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品类目表，类目和商品(spu)是一对多关系，类目与品牌是多对多关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_category
-- ----------------------------

-- ----------------------------
-- Table structure for tb_category_brand
-- ----------------------------
DROP TABLE IF EXISTS `tb_category_brand`;
CREATE TABLE `tb_category_brand`  (
  `category_id` bigint(20) NOT NULL COMMENT '商品类目id',
  `brand_id` bigint(20) NOT NULL COMMENT '品牌id',
  PRIMARY KEY (`category_id`, `brand_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品分类和品牌的中间表，两者是多对多关系' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_category_brand
-- ----------------------------

-- ----------------------------
-- Table structure for tb_sku
-- ----------------------------
DROP TABLE IF EXISTS `tb_sku`;
CREATE TABLE `tb_sku`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'sku id',
  `spu_id` bigint(20) NOT NULL COMMENT 'spu id',
  `title` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品标题',
  `images` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '商品的图片，多个图片以‘,’分割',
  `stock` int(8) UNSIGNED NULL DEFAULT 9999 COMMENT '库存',
  `price` bigint(16) NOT NULL DEFAULT 0 COMMENT '销售价格，单位为分',
  `indexes` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '特有规格属性在spu属性模板中的对应下标组合',
  `own_spec` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT 'sku的特有规格参数键值对，json格式，反序列化时请使用linkedHashMap，保证有序',
  `enable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否有效，0无效，1有效',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `key_spu_id`(`spu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27359021564 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'sku表,该表表示具体的商品实体,如黑色的 64g的iphone 8' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_sku
-- ----------------------------

-- ----------------------------
-- Table structure for tb_spec_group
-- ----------------------------
DROP TABLE IF EXISTS `tb_spec_group`;
CREATE TABLE `tb_spec_group`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cid` bigint(20) NOT NULL,
  `category_id` bigint(20) NOT NULL COMMENT '商品分类id，一个分类下有多个规格组',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '规格组的名称',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `key_category`(`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '规格参数的分组表，每个商品分类下有多个规格参数组' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_spec_group
-- ----------------------------

-- ----------------------------
-- Table structure for tb_spec_param
-- ----------------------------
DROP TABLE IF EXISTS `tb_spec_param`;
CREATE TABLE `tb_spec_param`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cid` bigint(20) NOT NULL,
  `category_id` bigint(20) NOT NULL COMMENT '商品分类id',
  `group_id` bigint(20) NOT NULL,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '参数名',
  `numeric` tinyint(1) NOT NULL COMMENT '是否是数字类型参数，true或false',
  `unit` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '数字类型参数的单位，非数字类型可以为空',
  `generic` tinyint(1) NOT NULL COMMENT '是否是sku通用属性，true或false',
  `searching` tinyint(1) NOT NULL COMMENT '是否用于搜索过滤，true或false',
  `segments` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '数值类型参数，如果需要搜索，则添加分段间隔值，如CPU频率间隔：0.5-1.0',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `key_group`(`group_id`) USING BTREE,
  INDEX `key_category`(`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '规格参数组下的参数名' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_spec_param
-- ----------------------------

-- ----------------------------
-- Table structure for tb_spu
-- ----------------------------
DROP TABLE IF EXISTS `tb_spu`;
CREATE TABLE `tb_spu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'spu id',
  `name` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '商品名称',
  `sub_title` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '副标题，一般是促销信息',
  `cid1` bigint(20) NOT NULL COMMENT '1级类目id',
  `cid2` bigint(20) NOT NULL COMMENT '2级类目id',
  `cid3` bigint(20) NOT NULL COMMENT '3级类目id',
  `brand_id` bigint(20) NOT NULL COMMENT '商品所属品牌id',
  `saleable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否上架，0下架，1上架',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 187 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'spu表，该表描述的是一个抽象性的商品，比如 iphone8' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_spu
-- ----------------------------

-- ----------------------------
-- Table structure for tb_spu_detail
-- ----------------------------
DROP TABLE IF EXISTS `tb_spu_detail`;
CREATE TABLE `tb_spu_detail`  (
  `spu_id` bigint(20) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品描述信息',
  `generic_spec` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '通用规格参数数据',
  `special_spec` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '特有规格参数及可选值信息，json格式',
  `packing_list` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '包装清单',
  `after_service` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '售后服务',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`spu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_spu_detail
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
