package io.github.susimsek.apidoc.web.filter;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@Component
public class SpaWebFilter extends OncePerRequestFilter {

    /**
     * Forwards any unmapped paths (except those containing a period) to the client {@code index.html}.
     * Excludes API, management, SpringDoc, and static resource paths.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain)
        throws ServletException, IOException {
        // Request URI includes the contextPath if any, remove it.
        String path = request.getRequestURI().substring(request.getContextPath().length());
        if (
            !path.startsWith("/api") &&
                !path.startsWith("/actuator") &&
                !path.equals("/swagger-ui.html") &&
                !path.startsWith("/swagger-ui") &&
                !path.startsWith("/v3/api-docs") &&
                !path.startsWith("/h2-console") &&
                !path.contains(".") &&
                path.matches("/.*")
        ) {
            request.getRequestDispatcher("/index.html").forward(request, response);
            return;
        }

        filterChain.doFilter(request, response);
    }
}
