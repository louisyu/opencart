<?php
class ControllerCommonMenu extends Controller {
	public function index() {
		$this->load->language('common/menu');

		$this->load->model('catalog/category');

		$this->load->model('catalog/product');

		$this->load->model('catalog/information');
		$data['categories'] = array();
		
		foreach ($this->model_catalog_information->getInformations() as $info) {
		    if ($info['information_id'] == '7') {
		        $data['categories'][] = array(
		            'name'     => $info['title'],
		            'children' => array(),
		            'column'   => 1,
		            'href'     => $this->url->link('information/information', 'language=' . $this->config->get('config_language') . '&information_id=' . $info['information_id'])
		        );
		    }
		}

		$categories = $this->model_catalog_category->getCategories(0);
		$data['home'] = $this->url->link('common/home');
		$data['all_blogs'] = $this->url->link('extension/megnor_blog/home');
		foreach ($categories as $category) {
			if ($category['top']) {
				// Level 2
				$children_data = array();

				$children = $this->model_catalog_category->getCategories($category['category_id']);

				foreach ($children as $child) {
					$filter_data = array(
						'filter_category_id'  => $child['category_id'],
						'filter_sub_category' => true
					);

					/* 2 Level Sub Categories START */
					$childs_data = array();
					$child_2 = $this->model_catalog_category->getCategories($child['category_id']);

					foreach ($child_2 as $childs) {
						$filter_data1 = array(
							'filter_category_id'  => $childs['category_id'],
							'filter_sub_category' => true
						);

						$childs_data[] = array(
							'name'  => $childs['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data1) . ')' : ''),
							'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'] . '_' . $childs['category_id'])
						);
					}
					/* 2 Level Sub Categories END */

					$children_data[] = array(
						'name'  => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
						'childs' => $childs_data,
						'column'   => $child['column'] ? $child['column'] : 1,
						'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'])
					);
				}

				// Level 1
				$data['categories'][] = array(
					'name'     => $category['name'],
					'children' => $children_data,
					'column'   => $category['column'] ? $category['column'] : 1,
					'href'     => $this->url->link('product/category', 'path=' . $category['category_id'])
				);
			}
		}
		return $this->load->view('common/menu', $data);
	}
}
