package mrigor.dao.jdbc;

import mrigor.dao.ManagerDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Игорь on 18.07.2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ManagerDaoImplTest {

    @Autowired
    ManagerDao dao;



    @Test
    public void getAll() throws Exception {
        System.out.println(dao.getAll());
    }

    @Test
    public void get() throws Exception {
    }

    @Test
    public void delete() throws Exception {
    }

    @Test
    public void update() throws Exception {
    }

    @Test
    public void create() throws Exception {
    }

    @Test
    public void getByEmail() throws Exception {
    }

}