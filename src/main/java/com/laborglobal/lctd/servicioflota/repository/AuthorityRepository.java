package com.laborglobal.lctd.servicioflota.repository;

import com.laborglobal.lctd.servicioflota.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
