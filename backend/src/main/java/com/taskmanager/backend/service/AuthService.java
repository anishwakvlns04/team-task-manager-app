package com.taskmanager.backend.service;
import java.util.HashMap;
import java.util.Map;
import com.taskmanager.backend.dto.LoginRequest;
import com.taskmanager.backend.dto.LoginRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.taskmanager.backend.dto.SignupRequest;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String signup(SignupRequest request) {

        if(userRepository.findByEmail(request.getEmail()) != null) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User Registered Successfully";
    }
    public Map<String, String> login(LoginRequest request) {

        Map<String, String> response = new HashMap<>();

        User user = userRepository.findByEmail(request.getEmail());

        if(user == null) {

            response.put("message", "User not found");

            return response;
        }

        if(encoder.matches(request.getPassword(), user.getPassword())) {

            response.put("message", "Login Successful");
            response.put("role", user.getRole());

            return response;
        }

        response.put("message", "Invalid Password");

        return response;
    }
}