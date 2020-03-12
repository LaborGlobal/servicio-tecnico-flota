package com.laborglobal.lctd.servicioflota.repository.search;

import com.laborglobal.lctd.servicioflota.domain.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, Long> {}
