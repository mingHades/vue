// 请求 topics 相关的数据


// 引入 axios 模块（封装的ajax）
import axios from 'axios';

var $http = axios.create({
	// 基本的url
  baseURL: 'https://www.vue-js.com/api/v1',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});



// 获取数据列表
/*
	page Number 页数
	tab String 主题分类
	limit Number 每一页的主题数量
*/
function geTopicList(options){
	// 默认参数
	var newOptions = Object.assign({
		tab:'all',
		limit:20,
		page:1
	},options);

  return $http({
  	url:'/topics',
  	// 参数
	  params: newOptions   	
  });
}

// 获取主题的详细信息
function getTopic(id){
	// 把 文章的 id 拼接 在 url 里
  return $http.get('/topic/'+id);
}

// 暴露 方法
export {geTopicList,getTopic};


